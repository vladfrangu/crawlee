import { PlaywrightCrawler } from '@vladfrangu-dev/crawlee';

const crawler = new PlaywrightCrawler({
    browserPoolOptions: {
        useFingerprints: true, // this is the default
        fingerprintOptions: {
            fingerprintGeneratorOptions: {
                browsers: [{
                    name: 'edge',
                    minVersion: 96,
                }],
                devices: [
                    'desktop',
                ],
                operatingSystems: [
                    'windows',
                ],
            },
        },
    },
    // ...
});
