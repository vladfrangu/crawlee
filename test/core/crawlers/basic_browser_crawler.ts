import type { PuppeteerCrawlingContext, PuppeteerCrawlerOptions, PuppeteerGoToOptions } from '@vladfrangu-dev/crawlee-puppeteer';
import { BrowserCrawler } from '@vladfrangu-dev/crawlee-puppeteer';
import type { PuppeteerPlugin } from '@vladfrangu-dev/crawlee-browser-pool';
import type { HTTPResponse, LaunchOptions } from 'puppeteer';

export class BrowserCrawlerTest extends BrowserCrawler<{ browserPlugins: [PuppeteerPlugin] }, LaunchOptions, PuppeteerCrawlingContext> {
    constructor(options: Partial<PuppeteerCrawlerOptions> = {}) {
        super(options as any);
    }

    protected _navigationHandler(ctx: PuppeteerCrawlingContext, gotoOptions: PuppeteerGoToOptions): Promise<HTTPResponse | null | undefined> {
        return ctx.page.goto(ctx.request.url, gotoOptions);
    }
}
