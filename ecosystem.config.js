module.exports = {
	apps: [
		{
			name: 'rt-server-1',
			script: 'dist/data-collector/index.js',
			NODE_ENV: 'development',
			env_production: {
				NODE_ENV: 'production'
			}
		}
	]
};
