export default function EventList({ html, state }) {
  const { attrs, store } = state
  const { key } = attrs
  const { items } = store
  const item = items[key]
  return html`
        <h2>${item.summary}</h2>
        <section class="mb0">${JSON.stringify(items[key])}</section>
      `
}
