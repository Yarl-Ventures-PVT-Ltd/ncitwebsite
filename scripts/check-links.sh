#!/bin/bash
#
# Crawl every page in the sitemap, follow every internal link on it, and report
# anything that does not return 200.
#
# Why a crawl and not a grep: links are written in several shapes in this
# codebase. Some are `href="/x"` in JSX, others are `href: "/x"` or `link: "/x"`
# inside data arrays, and some are built from template literals. A source scan
# missed eleven broken links that this crawl found immediately.
#
# Usage:
#   npm run build && npm start &        # or: npm run dev
#   ./scripts/check-links.sh            # defaults to http://localhost:3000
#   ./scripts/check-links.sh http://localhost:4000
#
# Exits non-zero when any link is broken, so it can gate a release.

set -u
BASE="${1:-http://localhost:3000}"

if ! curl -sf -o /dev/null "$BASE/"; then
  echo "No server responding at $BASE"
  echo "Start one first: npm run build && npm start"
  exit 2
fi

tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT
: > "$tmp/seen"
bad=0
hops=0
checked=0

routes=$(curl -s "$BASE/sitemap.xml" | grep -oE '<loc>[^<]+' | sed 's|<loc>https://www.ncit.lk||')

if [ -z "$routes" ]; then
  echo "Could not read $BASE/sitemap.xml"
  exit 2
fi

for route in $routes; do
  [ -z "$route" ] && route="/"
  page=$(curl -s "$BASE$route")
  hrefs=$(echo "$page" \
    | grep -oE 'href="/[^"]*"' \
    | sed 's/href="//; s/"$//; s/[#?].*$//' \
    | sort -u)

  for href in $hrefs; do
    [ -z "$href" ] && continue
    # Static assets and Next internals are served, not routed.
    case "$href" in /wp-content*|/_next*) continue ;; esac
    grep -qxF "$href" "$tmp/seen" && continue
    echo "$href" >> "$tmp/seen"

    # Two numbers, because they mean different things. The first is what the
    # link returns on its own; the second is where it ends up after redirects.
    # Without -L this script called every 308 a broken link and reported two
    # dozen failures on a site where nothing was broken, which is how a gate
    # stops being read.
    code=$(curl -s -o /dev/null -w "%{http_code}" "$BASE$href")
    final=$(curl -s -o /dev/null -L -w "%{http_code}" "$BASE$href")
    checked=$((checked + 1))
    if [ "$final" != "200" ]; then
      bad=$((bad + 1))
      echo "  BROKEN   $final  $href   (linked from $route)"
    elif [ "$code" != "200" ]; then
      hops=$((hops + 1))
      echo "  redirect $code  $href   (linked from $route)"
    fi
  done
done

echo "Checked $checked unique internal links."
# A redirect hop is a link worth tidying, not a reason to fail the build. Only
# a link that does not resolve at all stops a commit.
if [ "$hops" -gt 0 ]; then
  echo "REDIRECTS: $hops  (resolve, but link the final URL instead)"
fi
if [ "$bad" -gt 0 ]; then
  echo "BROKEN: $bad"
  exit 1
fi
echo "All internal links return 200."
