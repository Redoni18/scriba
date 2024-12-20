# Scriba News Aggregator

Scriba is an automated news aggregation service designed to fetch and store the latest news articles from multiple sources. It's part of a larger project called Census, which aims to create a news rating and aggregation platform.

## Technologies Used

- [Bun](https://bun.sh/) - JavaScript runtime and toolkit
- [Prisma](https://www.prisma.io/) - Next-generation ORM for Node.js and TypeScript
- [PostgreSQL](https://www.postgresql.org/) - Open-source relational database
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript

## Features

- Automated fetching of news articles from multiple predefined sources
- Storage of articles, categories, tags, and authors in a PostgreSQL database
- Handling of many-to-many relationships between articles, categories, and tags
- Deduplication of entities using source-specific unique identifiers
- Cloudflare protection detection and graceful error handling
- Hourly scheduled runs using Vercel Cron Jobs

## News Sources

Scriba currently fetches news from the following sources:

- telegrafi.com
- kallxo.com
- insajderi.com
- indeksonline.net
- gazetablic.com
- periskopi.com
- klankosova.tv

These sources are defined in the `NEWS_SITES` array in the `NewsFetcher.ts` file.

To install dependencies:

```bash
bun install
```

To run:

```bash
bun dev
```

This project was created using `bun init` in bun v1.0.2. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
