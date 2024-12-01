import EleventyFetch from '@11ty/eleventy-fetch'

export default async function () {
  const url = 'https://api.github.com/orgs/x-govuk/repos'

  return EleventyFetch(url, {
    duration: '1d',
    type: 'json'
  })
}
