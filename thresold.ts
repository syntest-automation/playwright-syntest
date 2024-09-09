type LighthouseCategories = Partial<{
    performance: number
    accessibility: number
    seo: number
    pwa: number
    "best-practices": number;
}>;

export const defaultThresholds: LighthouseCategories = {
    performance: 0.9,
    accessibility: 0.9,
    "best-practices": 0.9,
    seo: 0.9,
    pwa: 0.9,
};
