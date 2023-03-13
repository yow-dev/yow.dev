import { readFileSync } from 'fs'
import { URL } from 'url'
import { Arcdown } from 'arcdown'
// import HljsLineWrapper from '../../../docs/hljs-line-wrapper.mjs'
import { default as defaultClassMapping } from '../utils/markdown-class-mappings.mjs'

/** @type {import('@enhance/types').EnhanceApiFn} */
export async function get(req) {

  // reinvoked each req so no weird regexp caching
  const arcdown = new Arcdown({
    pluginOverrides: {
      markdownItClass: defaultClassMapping,
    }
  })

  const { path: activePath } = req
  let docPath = activePath.replace(/^\/?blog\//, '') || 'index'
  if (docPath.endsWith('/')) {
    docPath += 'index' // trailing slash == index.md file
  }

  const docURL = new URL(`../md/${docPath}.md`, import.meta.url)

  let docMarkdown
  try {
    docMarkdown = readFileSync(docURL.pathname, 'utf-8')
  } catch (_err) {
    return { statusCode: 404 }
  }
  const parsedMarkdown = await arcdown.render(docMarkdown)

  return {
    json: {
      md: parsedMarkdown,
    },
  }
}
