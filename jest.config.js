module.exports = {
    testTimeout: 60e3,
    maxWorkers: 3,
    testEnvironment: 'node',
    collectCoverage: false,
    testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
    transform: {
        '^.+\\.ts$': ['ts-jest', {
            tsconfig: 'test/tsconfig.json',
        }],
    },
    collectCoverageFrom: [
        '<rootDir>/packages/*/src/**/*.[jt]s',
    ],
    moduleNameMapper: {
        '^crawlee$': '<rootDir>/packages/crawlee/src',
        '^@vladfrangu-dev/crawlee-basic$': '<rootDir>/packages/basic-crawler/src',
        '^@vladfrangu-dev/crawlee-browser$': '<rootDir>/packages/browser-crawler/src',
        '^@vladfrangu-dev/crawlee-http$': '<rootDir>/packages/http-crawler/src',
        '^@vladfrangu-dev/crawlee-jsdom$': '<rootDir>/packages/jsdom-crawler/src',
        '^@vladfrangu-dev/crawlee-cheerio$': '<rootDir>/packages/cheerio-crawler/src',
        '^@vladfrangu-dev/crawlee-playwright$': '<rootDir>/packages/playwright-crawler/src',
        '^@vladfrangu-dev/crawlee-puppeteer$': '<rootDir>/packages/puppeteer-crawler/src',
        '^@vladfrangu-dev/crawlee-(.*)/(.*)$': '<rootDir>/packages/$1/$2',
        '^@vladfrangu-dev/crawlee-(.*)$': '<rootDir>/packages/$1/src',
        '^test/(.*)$': '<rootDir>/test/$1',
    },
    modulePathIgnorePatterns: [
        '<rootDir>/(.*)/dist',
        '<rootDir>/package.json',
    ],
};
