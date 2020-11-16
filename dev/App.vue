<template>
	<div class="icons">
		<div v-for="(icon) in iconNames" :key="icon" class="icon">
			<component :is="icons[icon]"></component>
			<span>{{icon}}</span>
		</div>
	</div>
</template>

<script>
import { Outline } from '../src/entry';

export default {
	name: 'App',
	data() {
		return {
			iconNames: Object.keys(Outline),
			icons: Outline
		};
	}
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin: 30px 20px;
}

.icons {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
	grid-gap: 1.5em;
}

.icon {
	display: inline-flex;
	flex-direction: column;
	align-items: center;
}

.icon span {
	font-size: 14px;
	margin-top: 10px;
	color: rgb(59, 59, 59);
}
</style>
