const govukEleventyPlugin = require('govuk-eleventy-plugin')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    brandColour: '#28a',
    fontFamily: 'system-ui, sans-serif',
    icons: {
      mask: 'https://raw.githubusercontent.com/x-govuk/logo/main/images/x-govuk-mask-icon.svg?raw=true',
      shortcut: 'https://raw.githubusercontent.com/x-govuk/logo/main/images/x-govuk-favicon.ico',
      touch: 'https://raw.githubusercontent.com/x-govuk/logo/main/images/x-govuk-apple-touch-icon.png'
    },
    ogImage: 'https://raw.githubusercontent.com/x-govuk/logo/main/images/x-govuk-opengraph-image.png',
    stylesheets: [
      '/assets/styles/application.css'
    ],
    homeKey: 'X-GOVUK',
    header: {
      organisationLogo: 'x-govuk',
      organisationName: 'X-GOVUK',
    },
    footer: {
      copyright: '© X-GOVUK',
      licence: 'An unofficial community project. [GitHub source](https://github.com/x-govuk/x-govuk.github.io).'
    }
  })

  // Pass through
  eleventyConfig.addPassthroughCopy('./app/assets')

  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'app',
      data: 'data',
      layouts: '../node_modules/govuk-eleventy-plugin/layouts'
    }
  }
}
