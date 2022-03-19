const govukEleventyPlugin = require('govuk-eleventy-plugin')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(govukEleventyPlugin, {
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
  eleventyConfig.addPassthroughCopy('./assets')

  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      layouts: 'node_modules/govuk-eleventy-plugin/app/layouts'
    }
  }
}
