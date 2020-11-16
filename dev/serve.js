import { createApp } from 'vue';
import { HeroIcons, Outline } from '../src/entry';
import App from './App.vue';

HeroIcons.register(Outline, true);

createApp(App)
	.use(HeroIcons)
	.mount('#app');
