import { marked } from 'marked'
//把 markdown 转换为 HTML 的库

import sanitizeHtml from 'sanitize-html'

const allowedTags = sanitizeHtml.defaults.allowedTags.concat(['img', 'h1', 'h2', 'h3'])

const allowedAttributes = Object.assign({}, sanitizeHtml.defaults.allowedAttributes, {
  img: ['alt', 'src']
})

export default async function NotePreview({ children }: { children?: string }) {
  const markedResult = await marked(children || '')

  const sanitizedHtml = sanitizeHtml(markedResult, {
    allowedTags,
    allowedAttributes
  })
  return (
    <div className="note-preview">
      <div
        className="text-with-markdown"
        dangerouslySetInnerHTML={{
          __html: sanitizedHtml
        }}
      />
    </div>
  )
}
