// vue.config.js
module.exports = {
	devServer: {
		proxy: {
			'/dev': {
				target: 'http://www.gczzz.cn:9990',
				ws: true,
				changeOrigin: true,
				pathRewrite: {
					'^/dev': ''
				}
			},
		}
	}
}