import fs from 'node:fs/promises'

import { govukEleventyPlugin } from '@x-govuk/govuk-eleventy-plugin'

const serviceName = 'X-GOVUK'

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(govukEleventyPlugin, {
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
    },
    homeKey: serviceName,
    icons: {
      mask: 'https://raw.githubusercontent.com/x-govuk/logo/main/images/x-govuk-icon-mask.svg?raw=true',
      shortcut:
        'https://raw.githubusercontent.com/x-govuk/logo/main/images/favicon.ico',
      touch:
        'https://raw.githubusercontent.com/x-govuk/logo/main/images/x-govuk-icon-180.png'
    },
    opengraphImageUrl:
      'https://raw.githubusercontent.com/x-govuk/logo/main/images/x-govuk-opengraph-image.png',
    serviceNavigation: {
      navigation: [
        {
          text: 'Home',
          href: '/'
        },
        {
          text: 'Community projects',
          href: '/projects'
        },
        {
          text: 'Posts',
          href: '/posts'
        }
      ]
    },
    showBreadcrumbs: false,
    stylesheets: ['/assets/application.css'],
    templates: {
      feed: true
    },
    themeColor: '#2288aa',
    titleSuffix: serviceName,
    url: process.env.GITHUB_ACTIONS && 'https://x-govuk.github.io/'
  })

  // Collections
  eleventyConfig.addCollection('post', (collection) => {
    return collection.getFilteredByGlob('app/posts/*.md')
  })

  // Pass through
  eleventyConfig.addPassthroughCopy('./app/assets')

  // Enable X-GOVUK brand
  eleventyConfig.addNunjucksGlobal('xGovuk', true)

  // Reset contents of output directory before each build
  eleventyConfig.on('eleventy.before', async ({ directories, runMode }) => {
    if (runMode === 'build') {
      await fs.rm(directories.output, {
        force: true,
        recursive: true
      })
    }
  })

  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'app',
      layouts: '_layouts'
    }
  }
}
