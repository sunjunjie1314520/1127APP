// vue.config.js
module.exports = {
	devServer: {
		proxy: {
			'/dev': {
				target: 'http://49.70.249.49:23957',
				ws: true,
				changeOrigin: true,
				pathRewrite: {
					'^/dev': ''
				}
			},
		}
	}
}