import { CheerioCrawler, ProxyConfiguration } from '@vladfrangu-dev/crawlee';

const proxyConfiguration = new ProxyConfiguration({ /* opts */ });

const crawler = new CheerioCrawler({
    useSessionPool: true,
    persistCookiesPerSession: true,
    proxyConfiguration,
    // ...
});
