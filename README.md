# Vue Next HeroIcons
A set of free Hero Icons library made for Vue 3

<a href="https://npmjs.org/package/vue-next-heroicons">
	<img src="https://img.shields.io/npm/v/vue-next-heroicons.svg?style=for-the-badge"  alt="npm version">
    <img src="https://img.shields.io/bundlephobia/min/vue-next-heroicons?style=for-the-badge" alt="npm bundle size">
	<img src="https://img.shields.io/snyk/vulnerabilities/npm/vue-next-heroicons?style=for-the-badge" alt="vulnerabilities">
	<img src="https://img.shields.io/npm/dy/vue-next-heroicons?style=for-the-badge" alt="npm downloads">
</a>

<br/>
<br/>

## Install
```bash
# npm
npm install vue-next-heroicons

# yarn
yarn add vue-next-heroicons
```

## Usage

```js
// Outline
import { AcademicCap, Annonation, ... } from 'vue-next-heroicons/outline'

// Solid
import { AcademicCap, Annonation, ... } from 'vue-next-heroicons/solid'
```
<br/>

> Global usage

```js
import { HeroIcons, Outline } from 'vue-next-heroicons'

HeroIcons.register(Outline, true);
createApp(...).use(HeroIcons).mount(...);
```

## Sizing

You can set a custom size using the `size` prop.
<br/>
By default, icon size is `1.5x`.

<br/>

>For multiple based sizing, pass the desired multiple followed by an `x`.

```html
<AcademicCap size="1.5x" />
```

>For pixel based sizing, pass an `integer`

```html
<AcademicCap :size="24" />
```
<br/>

## Credits

*Hero Icons* © [Tailwind Labs](https://github.com/tailwindlabs), Released under the [MIT](https://github.com/tailwindlabs/heroicons/blob/master/LICENSE) License.<br>

## Author
*vue-next-heroicons* © [dapotatoman](https://github.com/dapotatoman), Released under the [MIT](./LICENSE.md) License.<br>
