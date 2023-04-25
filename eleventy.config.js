const govukEleventyPlugin = require('@x-govuk/govuk-eleventy-plugin')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    brandColour: '#28a',
    fontFamily: 'system-ui, sans-serif',
    icons: {
      mask: 'https://raw.githubusercontent.com/x-govuk/logo/main/images/x-govuk-mask-icon.svg?raw=true',
      shortcut: 'https://raw.githubusercontent.com/x-govuk/logo/main/images/x-govuk-favicon.ico',
      touch: 'https://raw.githubusercontent.com/x-govuk/logo/main/images/x-govuk-apple-touch-icon.png'
    },
    opengraphImageUrl: 'https://raw.githubusercontent.com/x-govuk/logo/main/images/x-govuk-opengraph-image.png',
    stylesheets: [
      '/assets/styles/application.css'
    ],
    homeKey: 'X-GOVUK',
    url: process.env.GITHUB_ACTIONS
      ? 'https://x-govuk.github.io/'
      : '/',
    header: {
      organisationLogo: 'x-govuk',
      organisationName: 'X-GOVUK'
    },
    footer: {
      contentLicence: {
        html: 'An unofficial community project. <a class="govuk-footer__link" href="https://github.com/x-govuk/x-govuk.github.io">GitHub source</a>.'
      },
      copyright: {
        text: '© X-GOVUK'
      }
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
      layouts: '../node_modules/@x-govuk/govuk-eleventy-plugin/layouts'
    }
  }
}
