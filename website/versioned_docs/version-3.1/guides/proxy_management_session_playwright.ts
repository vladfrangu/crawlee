import { PlaywrightCrawler, ProxyConfiguration } from '@vladfrangu-dev/crawlee';

const proxyConfiguration = new ProxyConfiguration({ /* opts */ });

const crawler = new PlaywrightCrawler({
    useSessionPool: true,
    persistCookiesPerSession: true,
    proxyConfiguration,
    // ...
});
