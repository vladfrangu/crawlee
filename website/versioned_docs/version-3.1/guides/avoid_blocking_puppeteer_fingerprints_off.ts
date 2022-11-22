import { PuppeteerCrawler } from '@vladfrangu-dev/crawlee';

const crawler = new PuppeteerCrawler({
    browserPoolOptions: {
        useFingerprints: false,
    },
    // ...
});
