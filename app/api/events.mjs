// View documentation at: https://enhance.dev/docs/learn/starter-project/api
/**
  * @typedef {import('@enhance/types').EnhanceApiFn} EnhanceApiFn
  */

import { XMLParser } from 'fast-xml-parser'
import meetups from '../data/meetups.mjs'

/**
 * @type {EnhanceApiFn}
 */
export async function get() {
  // Tell the parser to treat all rss.channel.item tags as an array
  const options = {
    isArray: (name, jpath, isLeafNode, isAttribute) => { // eslint-disable-line
      if( ["rss.channel.item"].indexOf(jpath) !== -1) return true;
    }
  }
  const parser = new XMLParser(options);
  const events = []

  await Promise.all(Object.values(meetups).map(async meetup => { // eslint-disable-line
    let res = await fetch(meetup)
    let xml = await res.text()
    const json = parser.parse(xml)
    console.log(json)

    if (json?.rss?.channel?.item) {
      events.push(...json.rss.channel.item)
    }
  }))

  return {
    json: { events }
  }
}
