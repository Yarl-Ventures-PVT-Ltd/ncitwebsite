# ncit.lk site archive

A complete capture of the live site at https://www.ncit.lk/, taken on 2026-09-09
as reference material for the rebuild in this repository.

## What is here

| Folder or file        | Contents                                                              |
| --------------------- | --------------------------------------------------------------------- |
| `pages/`              | 176 pages, each saved twice: `<slug>.md` and `<slug>.html`            |
| `images/`             | 180 image files, kept under their original `wp-content/uploads/` path |
| `documents/`          | 13 linked PDF, DOCX and other files, original paths preserved         |
| `pages-index.json`    | One row per page: URL, slug, title, status code, sizes, link count    |
| `urls.txt`            | Every page URL captured                                               |
| `image-urls.txt`      | Every image URL found                                                 |
| `document-urls.txt`   | Every document URL found                                              |
| `crawl-raw.json`      | The unedited Firecrawl crawl response, in case anything is needed later |
| `images-failed.txt`   | Images that could not be fetched, with the reason                     |

Page filenames mirror the site path with `/` replaced by `__`. For example
`https://www.ncit.lk/about-us` is `pages/about-us.md`, and
`https://www.ncit.lk/category/events` is `pages/category__events.md`.
The home page is `pages/index.md`.

## How complete it is

- **176 pages.** Every page returned HTTP 200. Both a markdown and an HTML copy
  exist for all of them.
- **Cross-checked against two independent lists.** The 89 URLs in
  `urls_www_ncit_lk_simplescraper.csv` are all present. The 124 URLs found by
  `firecrawl map` are all present.
- **180 images.** Sourced from the page `images` field plus a sweep of the raw
  HTML for `<img src>`, `data-src`, `data-lazy-src`, `srcset` and CSS
  `url(...)` references, so lazy-loaded and responsive variants are included.
- **13 documents**, all downloaded successfully.

### The one thing that is not here

A single Google Maps static-map image referenced by the contact page. It is a
`maps.googleapis.com` API call with a domain-restricted key, so it returns 403
from anywhere other than ncit.lk. It is not NCIT content and nothing is lost.
It is recorded in `images-failed.txt`.

## How it was captured

The crawl ran server-side as one Firecrawl job, which is what makes it
complete. A client-side `firecrawl x download` was tried first and failed: it
fires every page at once with no backoff, and the free tier allows roughly ten
requests a minute, so 115 of 125 pages came back rate limited.

The server-side crawl returned 153 pages but skipped 23 WordPress date archives
such as `/2016/04` and `/2020/01/15`. Those were fetched separately in paced
batches and merged in, which is how the total reached 176. They are marked with
`"source": "date-archive-backfill"` in `pages-index.json`.

To refresh this archive:

```bash
firecrawl crawl "https://www.ncit.lk/" --limit 200 --crawl-entire-domain \
  --wait --progress --scrape-options '{"formats":["markdown","html","links","images"]}' \
  -o crawl.json
```

Then re-run the date-archive backfill, because the crawler does not follow
those archive links on its own.

## Note on committing this

The archive is 46 MB, most of it binary images and PDFs. Decide whether it
belongs in git before committing. To keep the text and index in version control
but leave the binaries out, add this to `.gitignore`:

```
ncit-lk-crawl/images/
ncit-lk-crawl/documents/
ncit-lk-crawl/crawl-raw.json
```
