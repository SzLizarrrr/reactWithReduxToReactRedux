const proxy = require('http-proxy-middleware')

const config = {
    target: 'http://localhost:8080',
    secure: false,
    pathRewrite: {
        '^/api': ''
    }
}

module.exports = (app) => {
    app.use('/api', proxy(config));
}