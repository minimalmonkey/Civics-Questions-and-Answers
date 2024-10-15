module.exports = {
	printWidth: 120,
	singleQuote: true,
	useTabs: true,
	bracketSameLine: true,
	trailingComma: 'all',
	proseWrap: 'always',
	arrowParens: 'avoid',
	overrides: [
		{
			files: '*.md',
			options: {
				useTabs: false,
			},
		},
	],
};
