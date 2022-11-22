import { PlaywrightCrawler } from '@vladfrangu-dev/crawlee';

const crawler = new PlaywrightCrawler({
    browserPoolOptions: {
        useFingerprints: false,
    },
    // ...
});
