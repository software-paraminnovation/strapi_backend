module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com',
            'magazinestorage1.s3-website.ap-south-1.amazonaws.com', // change here
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com',
            'magazinestorage1.s3-website.ap-south-1.amazonaws.com', // change here
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: ['http://localhost:5173', 'https://magazinestorage1.s3.ap-south-1.amazonaws.com','http://demoblog1.s3-website.ap-south-1.amazonaws.com','http://localhost:3000',"https://website.paramscience.org"], // Specify allowed origins
      headers: '*',  // Specify which headers can be used in the requests
      credentials: true, // Credentials are cookies, authorization headers, or TLS client certificates
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'], // Specify allowed methods
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  
];
