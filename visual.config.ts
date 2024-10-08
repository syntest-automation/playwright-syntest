import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    timeout: 30000,
    retries: 0,
    testDir: "tests/visual",
    use: {
        headless: true,
        baseURL: "https://www.lambdatest.com",
        viewport: { width: 1280, height: 720 },
        actionTimeout: 15000,
        ignoreHTTPSErrors: true,
        video: "off",
        screenshot: "only-on-failure",
    },
    projects: [
        {
            name: "Chrome",
            use: { browserName: "chromium" },
        },
        {
            name: "Firefox",
            use: { browserName: "firefox" },
        },
        {
            name: "Webkit",
            use: { browserName: "webkit" },
        },
    ],
};

export default config;