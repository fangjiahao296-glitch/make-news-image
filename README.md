[![make.fun](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/fangjiahao296-glitch/make-news-image/rank.svg)](https://make.fun/bounty/news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/fangjiahao296-glitch/make-news-image/reward.svg)](https://make.fun/bounty/news-image-20261124)

# The World in One Day — Tuesday 24 November 2026

A newspaper front page that sums up the world's news of Tuesday
24 November 2026 in a single 1024×1024 image, built for make.fun's
"Sum up 24 November's world news in one image" bounty.

## What's on the page

- Masthead: **THE WORLD IN ONE DAY — Tuesday 24 November 2026**,
  subtitled "40 stories · 6 continents".
- 40 stories in six sections: Top Stories, Geopolitics, Africa & Asia,
  Markets, World in Brief, Sport & Culture — each a one-line headline,
  facts only, no source names.
- A market strip at the foot with the 24 November closes:
  S&P 500, Nasdaq, Nikkei, CAC, DAX, FTSE, Hang Seng, Brent,
  natural gas, gold, BTC and ETH.

## How it runs

`main.ts` (Node 22, standard library only) copies the bundled
`entry.png` to the output directory as `entry.png`:

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts   # defaults to /output
```

The copy is byte-for-byte, so repeated runs produce identical output.
The image is a 1024×1024 PNG, 202,047 bytes (under the 1 MiB limit).
