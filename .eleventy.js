const govukEleventyPlugin = require('govuk-eleventy-plugin')

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(govukEleventyPlugin)

  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    templateFormats: ['njk', 'md'],
    dir: {
      layouts: './node_modules/govuk-eleventy-plugin/app/layouts',
      // govukEleventyPlugin requires `output` to save compiled assets
      output: process.argv[3].split('=')[1] || '_site'
    }
  }
}
