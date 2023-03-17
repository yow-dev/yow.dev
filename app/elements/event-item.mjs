export default function EventList({ html, state }) {
  const { attrs, store } = state
  const { key } = attrs
  const { events } = store
  const event = events[key]
  return html`
        <section class="mb0">${JSON.stringify(event)}</section>
      `
}
