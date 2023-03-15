// View documentation at: https://enhance.dev/docs/learn/starter-project/api
/**
  * @typedef {import('@enhance/types').EnhanceApiFn} EnhanceApiFn
  */
import arc from '@architect/functions'

/**
 * @type {EnhanceApiFn}
 */
export async function post(req) {
  await arc.events.publish({
    name: 'send-email',
    payload: req.body,
  })

  return {
    location: '/thanks'
  }
}
