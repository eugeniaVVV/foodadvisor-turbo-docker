module.exports = [
  'strapi::errors',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::favicon',
  'strapi::public',
  'strapi::session',
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
          directives: {
          // Enable the download of the Monaco editor
          // from cdn.jsdelivr.net.
          "script-src": ["'self'", "cdn.jsdelivr.net", "blob:"],
            upgradeInsecureRequests: null,
        },
      },
    },
}
];
