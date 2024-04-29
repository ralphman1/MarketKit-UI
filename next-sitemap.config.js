module.exports = {
  siteUrl: process.env.SITE_URL,
  generateRobotsTxt: true,

  transform: async (config, path) => {
    return {
      loc: path, 
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: [
          '/sign-in',
          '/sign-up',
          '/verification',
          '/orders',
          '/payment',
          '/checkout',
          '/payout',
          '/stores',
        ],
      },
    ],
  },
  exclude: [
    '/sign-in',
    '/sign-up',
    '/verification',
    '/orders',
    '/payment',
    '/checkout',
    '/payout',
    '/stores',
  ],
  robotsTxtOptions: {
    additionalSitemaps: [
      `${process.env.SITE_URL}/listing-sitemap.xml`,
      `${process.env.SITE_URL}/category-sitemap.xml`,
    ],
  },
};
