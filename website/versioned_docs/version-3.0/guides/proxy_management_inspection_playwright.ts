import { PlaywrightCrawler, ProxyConfiguration } from '@vladfrangu-dev/crawlee';

const proxyConfiguration = new ProxyConfiguration({ /* opts */ });

const crawler = new PlaywrightCrawler({
    proxyConfiguration,
    async requestHandler({ proxyInfo }) {
        console.log(proxyInfo);
    },
    // ...
});
