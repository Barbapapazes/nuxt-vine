# Nuxt Vine

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

A module to easily use [VineJS](https://vinejs.dev/) in Nuxt for for server-side validation!

## Features

<!-- Highlight some of the features your module provide here -->
- 📦 **Easy Setup**: Just add the module to your Nuxt config and you're good to go!
- 🪄 **Automatic error handling**: Errors are automatically handled when a validation fails.

## Quick Setup

1. Add `nuxt-vine` dependency to your project

```bash
# Using pnpm
pnpm add -D nuxt-vine

# Using yarn
yarn add --dev nuxt-vine

# Using npm
npm install --save-dev nuxt-vine
```

2. Add `nuxt-vine` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'nuxt-vine'
  ]
})
```

That's it! You can now use Nuxt Vine in your Nuxt app ✨

## Usage

This plugin automatically imports composable functions into your Nitro routes.

### Validation

```ts
export default defineEventHandler(async (event) => {
  const { title } = await validateBody(event, {
    title: v.string()
  })

  // If validation failed, an error will be thrown and handled by this package.

  return title
});
```

`v` is an alias for `vine`.

You can use:

- `validateBody` to validate the body of a request
- `validateQuery` to validate the query of a request
- `validateParams` to validate the params of a request


## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

Thanks [Atinux](https://github.com/atinux) for the initial works!

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-vine/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-vine

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-vine.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-vine

[license-src]: https://img.shields.io/npm/l/nuxt-vine.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nuxt-vine

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
