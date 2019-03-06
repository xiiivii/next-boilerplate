module.exports = server => {
    server
        // Remove etag header
        .disable('etag')

        // Remove x-powered-by header
        .disable('x-powered-by')

        // Allow detecting ips through proxies
        .enable('trust proxy');
};
