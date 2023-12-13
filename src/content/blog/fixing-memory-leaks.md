---
author: Sat Naing
pubDatetime: October 28th, 2021
readTime: 5
title: Fixing a Memory Leak in a Production Node.js App
postSlug: fixing-memory-leaks
featured: true
ogImage: https://res.cloudinary.com/kentcdodds-com/image/upload/c_fill,w_840,ar_3:4,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1510022079733-8b58aca7c4a9
tags:
  - leaks
  - performance
  - cpu
description: "AstroPaper Version 3: Elevating Your Web Experience with Astro v3 and Seamless View Transitions"
---

![A starry night sky.](../../assets/images/blog/example-cover.jpeg)

### Heap Snapshots

A few months ago, I wrote about
[my migration from Postgres to SQLite](https://docs.astro.build/en/guides/view-transitions/). I ended that with a "to be continued" because I had a number of issues related to memory and CPU spikes that I couldn't really explain. For a while I thought it was bugs in LiteFS (which I'm using to get distributed SQLite for my distributed node app), so I scaled down to a single region and even removed.

LiteFS for a while but the problem persisted so I knew it wasn't LiteFS, it must have been something else I did in the process of the migration (there were quite
a few changes that happened there).
