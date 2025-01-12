import { JSDOMCrawler, ProxyConfiguration } from '@vladfrangu-dev/crawlee';

const proxyConfiguration = new ProxyConfiguration({ /* opts */ });

const crawler = new JSDOMCrawler({
    proxyConfiguration,
    async requestHandler({ proxyInfo }) {
        console.log(proxyInfo);
    },
    // ...
});
