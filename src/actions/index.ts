import { db, Guestbook } from 'astro:db'
import { defineAction } from 'astro:actions'
import { z } from 'astro:schema'

export const server = {
  addNote: defineAction({
    accept: 'form',
    input: z.object({
      name: z.string().max(20),
      text: z.string().max(100)
    }),
    handler: async (input) => {
      const updatedNotes = await db.insert(Guestbook).values(input).returning()
      return updatedNotes
    }
  })
}
