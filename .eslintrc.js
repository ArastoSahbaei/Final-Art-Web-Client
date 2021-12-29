// eslint-disable-next-line no-undef
module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended'
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 12,
		'sourceType': 'module'
	},
	'plugins': [
		'react',
		'@typescript-eslint'
	],
	'rules': {
		'semi': [2, 'never'],
		'no-extra-semi': 2,
		'jsx-quotes': [2, 'prefer-single'],
		'react/jsx-boolean-value': [2, 'always'],
		'react/jsx-closing-bracket-location': [2, { 'selfClosing': 'after-props', 'nonEmpty': 'after-props' }],
		'react/jsx-curly-spacing': [2, 'never', { 'allowMultiline': false }],
		'react/jsx-max-props-per-line': [0, { 'maximum': 3 }],
		'react/jsx-no-literals': 2,
		'react/sort-prop-types': 2,
		'react/self-closing-comp': 2,
		'react/sort-comp': 2,
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'react/react-in-jsx-scope': 'off',
		'indent': [
			'warn',
			'tab'
		],
		'linebreak-style': 0,
		'quotes': [
			'warn',
			'single'
		],
	}
}
