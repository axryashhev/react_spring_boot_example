import {createProxyMiddleware} from 'http-proxy-middleware';

module.exports = (app: any) => {
    console.log('app: ', app);
    app.use(createProxyMiddleware('/api', { target: 'http://localhost:8080', ws: true }))
}
