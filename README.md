# Nuxt Google Maps Module

[![npm (scoped with tag)](https://img.shields.io/npm/v/nuxt-google-maps-module/latest.svg?style=flat-square)](https://npmjs.com/package/nuxt-google-maps-module)
[![npm](https://img.shields.io/npm/dt/nuxt-google-maps-module.svg?style=flat-square)](https://npmjs.com/package/nuxt-google-maps-module)
[![js-standard-style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com)

> A NuxtJS module to import Google maps script

## Table of Contents ##

* [Requirements](#requirements)
* [Install](#install)
* [Getting Started](#getting-started)
* [Usage](#usage)
* [License](#license)

## Requirements

* npm
* NuxtJS
* NodeJS

## Install

```bash
$ npm install --save nuxt-google-maps-module
```

## Getting Started

Add `nuxt-google-maps-module` to `modules` section of `nuxt.config.js`.
```js
{
  modules: [
    // Simple usage
    'nuxt-google-maps-module',

    // With options
    ['nuxt-google-maps-module', {
      /* module options */
      key: 'GOOGLE MAPS KEY', // Default
    }],
 ]
}
```
or even
```js
{
  modules: [
    'nuxt-google-maps-module',
  ],
  maps: {
    key: 'GOOGLE MAPS KEY',
  },
}
```

## Usage

You can use this module to inject in your components a `$google` instance.

```js
{
  modules: [
    'nuxt-google-maps-module',
  ],
  google: {
    key: 'GOOGLE MAPS KEY',
    libraries: [
      'places',
    ],
  },
}
```

Then you can use it in your components like:

```js
{
  ...
  mounted() {
    const autocomplete = this.$google.maps.places.Autocomplete(inputElement,
      {
        types: ['geocode'],
      },
    );
  },
  ...
}
```

## License

[MIT License](./LICENSE)
