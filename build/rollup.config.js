import fs from 'fs';
import path from 'path';
import vue from 'rollup-plugin-vue';
import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import babel from '@rollup/plugin-babel';
import minimist from 'minimist';

import cleaner from 'rollup-plugin-cleaner';
import cleanup from 'rollup-plugin-cleanup';
import { terser } from 'rollup-plugin-terser';

// Get browserslist config and remove ie from es build targets
const esbrowserslist = fs.readFileSync('./.browserslistrc')
	.toString()
	.split('\n')
	.filter((entry) => entry && entry.substring(0, 2) !== 'ie');

const argv = minimist(process.argv.slice(2));
const projectRoot = path.resolve(__dirname, '..');

const external = ['vue'];
const globals = { vue: 'Vue' };
const baseConfig = {
	input: 'src/entry.js',
	plugins: {
		preVue: [
			alias({
				resolve: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
				entries: {
					'@': path.resolve(projectRoot, 'src'),
				},
			}),
		],
		replace: {
			'process.env.NODE_ENV': JSON.stringify('production'),
			'process.env.ES_BUILD': JSON.stringify('false'),
		},
		vue: {
			css: true,
			template: {
				isProduction: true,
			},
		},
		babel: {
			exclude: 'node_modules/**',
			extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
		},
		nodeResolve: {
			extensions: ['.vue', '.mjs', '.js', '.json', '.node']
		},
		cleanup: {
			comments: 'none',
			extensions: ['js', 'jsx', 'tag', '.ts', '.tsx', 'vue']
		}
	},
};

const buildFormats = [];
if (!argv.format || argv.format === 'es') {
	const esConfig = {
		...baseConfig,
		external,
		output: {
			dir: 'dist',
			format: 'esm',
			exports: 'named',
		},
		plugins: [
			cleaner({ targets: ['dist'] }),
			replace({
				...baseConfig.plugins.replace,
				'process.env.ES_BUILD': JSON.stringify('true'),
			}),
			...baseConfig.plugins.preVue,
			vue(baseConfig.plugins.vue),
			babel({
				...baseConfig.plugins.babel,
				presets: [
					[
						'@babel/preset-env',
						{
							targets: esbrowserslist,
						},
					],
				]
			}),
			nodeResolve(baseConfig.plugins.nodeResolve),
			commonjs(),
			cleanup(baseConfig.plugins.cleanup)
		],
		preserveModules: true,
	};
	buildFormats.push(esConfig);
}

if (!argv.format || argv.format === 'cjs') {
	const umdConfig = {
		...baseConfig,
		external,
		output: {
			compact: true,
			file: 'dist/entry.cjs.js',
			format: 'cjs',
			name: 'VueHeroIcons',
			exports: 'named',
			globals,
		},
		plugins: [
			replace(baseConfig.plugins.replace),
			...baseConfig.plugins.preVue,
			vue({
				...baseConfig.plugins.vue,
				template: {
					...baseConfig.plugins.vue.template,
					optimizeSSR: true,
				},
			}),
			babel(baseConfig.plugins.babel),
			nodeResolve(baseConfig.plugins.nodeResolve),
			commonjs(),
			cleanup(baseConfig.plugins.cleanup)
		],
	};
	buildFormats.push(umdConfig);
}

if (!argv.format || argv.format === 'iife') {
	const unpkgConfig = {
		...baseConfig,
		external,
		output: {
			compact: true,
			file: 'dist/entry.min.js',
			format: 'iife',
			name: 'VueHeroIcons',
			exports: 'named',
			globals,
		},
		plugins: [
			replace(baseConfig.plugins.replace),
			...baseConfig.plugins.preVue,
			vue(baseConfig.plugins.vue),
			babel(baseConfig.plugins.babel),
			nodeResolve(baseConfig.plugins.nodeResolve),
			commonjs(),
			terser({
				output: {
					ecma: 5,
				},
			}),
			cleanup(baseConfig.plugins.cleanup)
		],
	};
	buildFormats.push(unpkgConfig);
}

// Export config
export default buildFormats;
