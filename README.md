# foodadvisor-turbo-docker - Containerized Turborepo for FoodAdvisor Strapi Starter

**Turborepo boilerplate + docker-compose + Strapi foodadvisor starter (Strapi + Next.js).**

FoodAdvisor is the official Strapi demo app.

- [Turborepo](https://turborepo.org)
  - Turborepo uses [Yarn](https://classic.yarnpkg.com/lang/en/) as a package manager.
- [Strapi foodadvisor](https://github.com/strapi/foodadvisor)
  - Boilerplate /api/ with existing content-types and data extracted to sqlite3. (Postgres is commented out in api/config/database.js.)
  - Boilerplate /client/ uses [Next.js](https://nextjs.org) to fetch the content from Strapi.

## Prerequisites

Replace default variables in .env.example to .env: `cp apps/api/.env.example apps/api/.env` & `cp apps/client/.env.example apps/client/.env`

- Strapi (example in `./apps/api/.env.example`):
  - `STRAPI_ADMIN_CLIENT_URL=<url-of-nextjs>`
  - `STRAPI_ADMIN_CLIENT_PREVIEW_SECRET=<a-random-token>`

- Next.js (already in `./apps/client/.env.development`):
  - `NEXT_PUBLIC_API_URL=<url-of-strapi>`
  - `PREVIEW_SECRET=<the-same-random-token-as-for-strapi>`

Generate secure JWT tokens for apps/api/.env & apps/client/.env: `openssl rand 64 | base64`

If you update Strapi, make sure to update the `STRAPI_VERSION` in `./apps/api/.env` to the save version as `./apps/api/package.json`.

## Develop

To develop all apps and packages, run the following command:

`docker-compose up -d`

## Build

To build all apps and packages, exec into the Docker container:
`docker exec -it turbo_strapi_food /bin/bash` or `docker exec -it turbo_strapi_food bash`
and build `yarn run build`

## Turbo Packages
Turborepo boilerplate includes the following packages:

- `ui`: a stub React component library shared by both `web` and `docs` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting

### Remote Caching

Turborepo can use a technique known as [Remote Caching (Beta)](https://turborepo.org/docs/features/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching (Beta) you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd turbo-docker-foodadvisor
npx turbo login
```
This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turborepo.org/docs/core-concepts/pipelines)
- [Caching](https://turborepo.org/docs/core-concepts/caching)
- [Remote Caching (Beta)](https://turborepo.org/docs/core-concepts/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/core-concepts/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)

## Strapi FoodAdvisor Features overview

### User

**An intuitive, minimal editor** The editor allows you to pull in dynamic blocks of content. It’s 100% open-source, and it’s fully extensible.<br />
**Media Library** Upload images, video or any files and crop and optimize their sizes, without quality loss.<br />
**Flexible content management** Build any type of category, section, format or flow to adapt to your needs. <br />
**Sort and Filter** Built-in sorting and filtering: you can manage thousands of entries without effort.<br />
**User-friendly interface** The most user-friendly open-source interface on the market.<br />
**SEO optimized** Easily manage your SEO metadata with a repeatable field and use our Media Library to add captions, notes, and custom filenames to optimize the SEO of media assets.<br /><br />

### Global

[Customizable API](https://strapi.io/features/customizable-api): Automatically build out the schema, models, controllers for your API from the editor. Get REST or GraphQL API out of the box without writing a single line of code.<br />
[Media Library](https://strapi.io/features/media-library): The media library allows you to store your images, videos and files in your Strapi admin panel with many ways to visualize and manage them.<br />
[Role-Based Access Control (RBAC)](https://strapi.io/features/custom-roles-and-permissions): Role-Based Access Control is a feature available in the Administration Panel settings that let your team members have access rights only to the information they need.<br />
[Internationalization (i18n)](https://strapi.io/features/internationalization): Internationalization (i18n) lets you create many content versions, also called locales, in different languages and for different countries.<br />

## Credits

- [strapi/foodadvisor](https://github.com/strapi/foodadvisor)
- [kevinadhiguna/strapi-dockerize](https://github.com/kevinadhiguna/strapi-dockerize)
- [Elvincth/turbo-strapi-nextjs](https://github.com/Elvincth/turbo-strapi-nextjs)