import { HttpCrawler, ProxyConfiguration } from '@vladfrangu-dev/crawlee';

const proxyConfiguration = new ProxyConfiguration({ /* opts */ });

const crawler = new HttpCrawler({
    useSessionPool: true,
    persistCookiesPerSession: true,
    proxyConfiguration,
    // ...
});
