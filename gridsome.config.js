// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Karina Luna',
  siteUrl: 'https://www.karinaluna.com',
  siteDescription: 'Site for Karina Luna',
  plugins: [
    {
      use: "gridsome-plugin-i18n",
      options: {
        locales: [ // locales list
          'en',
          'es'
        ],
        pathAliases: { // path segment alias for each locales
          'en': 'en',
          'es': 'es',
        },
        fallbackLocale: 'en', // fallback language
        defaultLocale: 'en', // default language
        messages: {
          'en': require('./src/locales/en.json'), // Messages files
          'es': require('./src/locales/es.json'),
        }
      }
    },
  ]
}
