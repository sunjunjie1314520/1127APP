// vue.config.js
module.exports = {
	devServer: {
		proxy: {
			'/dev': {
				target: 'http://121.232.155.22:23957',
				ws: true,
				changeOrigin: true,
				pathRewrite: {
					'^/dev': ''
				}
			},
		}
	}
}