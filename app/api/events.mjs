// View documentation at: https://enhance.dev/docs/learn/starter-project/api
/**
  * @typedef {import('@enhance/types').EnhanceApiFn} EnhanceApiFn
  */

let makeGoogleCalendarURL = calID =>
  `https://www.googleapis.com/calendar/v3/calendars/${calID}/events`
+ `?singleEvents=true&key=<not-my-key>`

/**
 * @type {EnhanceApiFn}
 */
export async function get() {

  let tjs = makeGoogleCalendarURL('k6l8oiu416ftcjpjetn0r7a79me8pq4r@import.calendar.google.com')

  let res = await fetch(tjs)
  let { items } = await res.json()

  return {
    json: { items }
  }
}
