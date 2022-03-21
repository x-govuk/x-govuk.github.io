const EleventyFetch = require('@11ty/eleventy-fetch')

module.exports = async function () {
  const url = 'https://api.github.com/orgs/x-govuk/repos'

  return EleventyFetch(url, {
    duration: '1d',
    type: 'json'
  })
}
