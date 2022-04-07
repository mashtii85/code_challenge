// eslint-disable-next-line @typescript-eslint/no-var-requires
const NextI18Next = require('next-i18next').default
// const { localeSubpaths } = require('next/config').default().publicRuntimeConfig
// import {} from '../public/static/locales'
module.exports = new NextI18Next({
  browserLanguageDetection: false,
  serverLanguageDetection: false,
  otherLanguages: ['en'],
  defaultNS: 'common',
  defaultLanguage: 'fa',
  // localeStructure: '{{lng}}/{{ns}}',
  // localeSubpaths: {
  //   fa: '',
  //   en: '',
  // },
  localePath:
    typeof window === 'undefined' ? 'public/static/locales' : 'static/locales',
})
