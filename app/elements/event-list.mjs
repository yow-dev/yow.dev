export default function EventList({ html, state }) {
  const { store } = state
  const { items } = store
  return html`
      <h2>Upcoming talks</h2>
      ${items.map((_, i) => `<event-item key="${i}"></event-item>`).join('')}
    `
}
