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

    code=$(curl -s -o /dev/null -w "%{http_code}" "$BASE$href")
    checked=$((checked + 1))
    if [ "$code" != "200" ]; then
      bad=$((bad + 1))
      echo "  $code  $href   (linked from $route)"
    fi
  done
done

echo "Checked $checked unique internal links."
if [ "$bad" -gt 0 ]; then
  echo "BROKEN: $bad"
  exit 1
fi
echo "All internal links return 200."
