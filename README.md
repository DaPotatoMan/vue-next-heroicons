# Vue Next HeroIcons
A set of free Hero Icons library made for Vue 3

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

*Hero Icons* © [Tailwind Labs](https://github.com/tailwindlabs), Released under the [MIT](./LICENSE.md) License.<br>

## Author
*vue-next-heroicons* © [dapotatoman](https://github.com/dapotatoman), Released under the [MIT](./LICENSE.md) License.<br>
