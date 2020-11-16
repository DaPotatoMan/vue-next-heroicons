const fs = require('fs-extra');
const path = require('path');
const { pascalCase } = require('pascal-case');

const componentTemplate = (name, svg) => `
export default {
	name: '${name}',

	props: {
		size: {
			type: [String, Number],
			default: '1.5x',
			validator: (s) => (typeof s === 'string' ? /^\\d+(\\.\\d{1,2})?x$/.test(s) : !Number.isNaN(s))
		}
	},

	render(ctx, cache, props) {
		const size = (typeof props.size === 'string')
					? props.size.slice(0, props.size.length - 1) +'em'
					: props.size + 'px';
		return (${svg.replace(/<svg([^>]+)>/, '<svg$1 width={size} height={size}>')});
	}
};
`.trimLeft();

async function extractIcons(type, dist) {
	const moduleDir = path.resolve(__dirname, '../node_modules/heroicons');
	const icons = await fs.readdir(path.join(moduleDir, type));
	const iconsIndex = [];

	await fs.remove(path.join(dist, type));
	await fs.mkdir(path.join(dist, type));

	for (let i = 0; i < icons.length; i++) {
		const icon = icons[i];
		const name = pascalCase(icon.split('.svg').join()).split('_').join('');
		const file = icon.split('.svg').join('.js');
		const src = path.join(moduleDir, type, icon);
		const dest = path.join(dist, type, file);

		const svg = await fs.readFile(src, 'utf8');
		const template = componentTemplate(name, svg.replace(/\n|\r|\s\s/gm, ''));

		iconsIndex.push(`export { default as ${name} } from './${file.split('.js').join('')}';`);
		await fs.writeFile(dest, template);
	}

	// CREATE INDEX FILE
	iconsIndex.push('');
	await fs.writeFile(path.join(dist, type, 'index.js'), iconsIndex.join('\n'));
}

extractIcons('outline', 'src');
extractIcons('solid', 'src');
