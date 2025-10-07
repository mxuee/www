import { db, Guestbook } from 'astro:db'

export default async function () {
  await db.insert(Guestbook).values([
    { id: 1, name: 'Eva', text: 'Hello, world!' },
    { id: 2, name: 'Paul', text: 'Hello, world!' },
    { id: 3, name: 'Waxer', text: 'Hello, world!' }
  ])
}
