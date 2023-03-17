export default function EventList({ html, state }) {
  const { store } = state
  const { events } = store
  return html`
      <h2>Upcoming talks</h2>
      ${events.map((_, i) => `<event-item key="${i}"></event-item>`).join('')}
    `
}
