import { defineTable, column, NOW, defineDb } from 'astro:db'

const Guestbook = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text({ unique: true }),
    text: column.text(),
    date: column.date({ default: NOW })
  }
})

export default defineDb({
  tables: { Guestbook }
})
