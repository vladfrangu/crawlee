import { CheerioCrawler, downloadListOfUrls } from '@vladfrangu-dev/crawlee';

const crawler = new CheerioCrawler({
    // Function called for each URL
    async requestHandler({ request, log }) {
        log.info(request.url);
    },
    maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl a sitemap)
});

const listOfUrls = await downloadListOfUrls({ url: 'https://crawlee.dev/sitemap.xml' });

await crawler.addRequests(listOfUrls);

// Run the crawler
await crawler.run();
