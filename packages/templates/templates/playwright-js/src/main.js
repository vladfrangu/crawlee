// For more information, see https://crawlee.dev/
import { PlaywrightCrawler, ProxyConfiguration } from '@vladfrangu-dev/crawlee';
import { router } from './routes.js';

const startUrls = ['https://crawlee.dev'];

const crawler = new PlaywrightCrawler({
    // proxyConfiguration: new ProxyConfiguration({ proxyUrls: ['...'] }),
    requestHandler: router,
});

await crawler.run(startUrls);
