// import { expect } from "@playwright/test";
// // import lighthouse from "lighthouse";

// // type LighthouseCategories = Partial<{
// //     performance: number
// //     accessibility: number
// //     seo: number
// //     pwa: number
// //     "best-practices": number;
// // }>;

// // const defaultThresholds: LighthouseCategories = {
// //     performance: 0.9,
// //     accessibility: 0.9,
// //     "best-practices": 0.9,
// //     seo: 0.9,
// //     pwa: 0.9,
// // };

// // declare global {
// //     namespace PlaywrightTest {
// //         interface Matchers<R, T> {
// //             toMatchThresholds(received: LighthouseCategories): R;
// //         }
// //     }
// // }

// expect.extend({
//     toMatchThresholds(
//         received: any,
//         expected: any
//     ) {
//         const pass = Object.entries(expected).every(([category, threshold]) => {
//             const receivedScore = received[category as keyof any];
//             return (receivedScore || 0) >= threshold;
//         });

//         if (pass) {
//             return {
//                 message: () =>
//                     `Expected: ${this.utils.printExpected(
//                         expected
//                     )}\nReceived: ${this.utils.printReceived(received)}`,
//                 pass: true,
//             };
//         }
//         return {
//             message: () =>
//                 `Expected: ${this.utils.printExpected(
//                     expected
//                 )}\nReceived: ${this.utils.printReceived(
//                     received
//                 )}\n\n${this.utils.diff(expected, received)}`,
//             pass: false,
//         };
//     },
// });



import { test } from "@playwright/test";
import * as playwright from "playwright";
import { playAudit } from "playwright-lighthouse";
import { defaultThresholds } from "thresold";

test.describe("Lighthouse audit", () => {
    test("Audit TestSklep", async ({ browserName }) => {
        test.skip(browserName !== "chromium", "Run only on chromium");

        const browser = await playwright["chromium"].launch({
            args: ["--remote-debugging-port=9222"],
        });

        const page = await browser.newPage();
        await page.goto("https://react.dev/");

        await playAudit({
            page: page,
            thresholds: defaultThresholds,
            reports: {
                formats: {
                    html: true,
                },
                name: "Lighthouse Report",
            },
            port: 9222,
        });

        await browser.close();
    });
});
