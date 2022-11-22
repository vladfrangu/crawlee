/* eslint-disable import/export */

import { log, enqueueLinks } from '@vladfrangu-dev/crawlee-core';
import { social, sleep, downloadListOfUrls, parseOpenGraph } from '@vladfrangu-dev/crawlee-utils';
import { puppeteerUtils } from '@vladfrangu-dev/crawlee-puppeteer';
import { playwrightUtils } from '@vladfrangu-dev/crawlee-playwright';

export * from '@vladfrangu-dev/crawlee-core';
export * from '@vladfrangu-dev/crawlee-utils';
export * from '@vladfrangu-dev/crawlee-basic';
export * from '@vladfrangu-dev/crawlee-browser';
export * from '@vladfrangu-dev/crawlee-http';
export * from '@vladfrangu-dev/crawlee-jsdom';
export * from '@vladfrangu-dev/crawlee-cheerio';
export * from '@vladfrangu-dev/crawlee-puppeteer';
export * from '@vladfrangu-dev/crawlee-playwright';

export const utils = {
    puppeteer: puppeteerUtils,
    playwright: playwrightUtils,
    log,
    enqueueLinks,
    social,
    sleep,
    downloadListOfUrls,
    parseOpenGraph,
};
