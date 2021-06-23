module.exports = {
	extract: {

		include: [
			'layouts/**/*.html', // Layout files
			'content/**/*.{html,md}' // From content
		],
		exclude: [
			'node_modules/**/*',
			'.git/**/*'
		]
	},
	preflight: true // Default CSS reset
}