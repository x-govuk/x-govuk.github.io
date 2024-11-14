const rssPlugin = require('@11ty/eleventy-plugin-rss')
const govukEleventyPlugin = require('@x-govuk/govuk-eleventy-plugin')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(rssPlugin)

  eleventyConfig.addPlugin(govukEleventyPlugin, {
    icons: {
      mask: 'https://raw.githubusercontent.com/x-govuk/logo/main/images/x-govuk-mask-icon.svg?raw=true',
      shortcut:
        'https://raw.githubusercontent.com/x-govuk/logo/main/images/x-govuk-favicon.ico',
      touch:
        'https://raw.githubusercontent.com/x-govuk/logo/main/images/x-govuk-apple-touch-icon.png'
    },
    opengraphImageUrl:
      'https://raw.githubusercontent.com/x-govuk/logo/main/images/x-govuk-opengraph-image.png',
    feedUrl: 'feed.xml',
    homeKey: 'X-GOVUK',
    titleSuffix: 'X-GOVUK',
    url: process.env.GITHUB_ACTIONS && 'https://x-govuk.github.io/',
    header: {
      logotype: 'x-govuk'
    },
    footer: {
      meta: {
        items: [
          {
            href: '/feed.xml',
            text: 'Subscribe to feed'
          }
        ]
      },
      contentLicence: {
        html: 'An unofficial community project. <a class="govuk-footer__link" href="https://github.com/x-govuk/x-govuk.github.io">GitHub source</a>.'
      },
      copyright: {
        text: '© X-GOVUK'
      }
    }
  })

  // Collections
  eleventyConfig.addCollection('post', (collection) => {
    return collection.getFilteredByGlob('app/posts/*.md')
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
