const fs = require('fs-extra');
const pkg = require('../package.json');

const packageJSONTemplate = `{
	"name": "${pkg.name}",
	"version": "${pkg.version}",
	"main": "entry.cjs.js",
	"module": "entry.js",
	"jsnext:main": "entry.js",
	"unpkg": "entry.min.js",
	"license": "${pkg.license}",
	"homepage": "${pkg.homepage}",
	"description": "${pkg.description}",
	"keywords": ${JSON.stringify(pkg.keywords)},
	"repository": ${JSON.stringify(pkg.repository)},
	"sideEffects": "false",
	"author": {
		"name": "${(pkg.author.name)}"
	}
}
`.trim();

fs.writeFileSync('dist/package.json', packageJSONTemplate);
fs.copyFileSync('README.md', 'dist/README.md');
fs.copyFileSync('LICENSE.md', 'dist/LICENSE.md');
