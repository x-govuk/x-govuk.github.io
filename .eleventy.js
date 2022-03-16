const fs = require('node:fs');
const govukEleventyPlugin = require('govuk-eleventy-plugin')

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    header: {
      organisationLogo: fs.readFileSync('./assets/logo.svg', 'utf8'),
      organisationName: 'X-GOVUK',
    },
    footer: {
      copyright: '© X-GOVUK',
      licence: 'An unofficial community project. [GitHub source](https://github.com/x-govuk/x-govuk.github.io).'
    }
  })

  return {
    dir: {
      layouts: 'node_modules/govuk-eleventy-plugin/app/layouts'
    }
  }
}
