import arc from '@architect/functions'

export const handler = arc.events.subscribe(sendEmail)

async function sendEmail(payload) {
  console.log(payload)
}
