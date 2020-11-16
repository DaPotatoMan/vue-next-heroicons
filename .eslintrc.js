module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/vue3-essential',
		'@vue/airbnb',
	],
	parserOptions: {
		parser: 'babel-eslint',
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-unused-vars': 'warn',

		indent: 'off',
		'max-len': 'off',
		'no-tabs': 'off',
		'comma-dangle': 'off',

		eqeqeq: 'warn',
		camelcase: 'warn',
		'no-new': 'warn',
		'no-plusplus': 'warn',
		'max-classes-per-file': 'warn',
		'prefer-destructuring': 'warn',
		'lines-between-class-members': 'warn',

		'global-require': 'warn',
		'no-extend-native': 'warn',
		'no-await-in-loop': 'warn',
		'no-param-reassign': 'warn',
		'no-nested-ternary': 'warn',
		'object-curly-newline': 'warn',
		'no-restricted-globals': 'warn',
		'newline-per-chained-call': 'warn',
		'import/no-extraneous-dependencies': [
			'warn',
			{
				devDependencies: true
			}
		]
	}
};
