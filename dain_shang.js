require('dotenv').config()

const { LineBot, FileSessionStore } = require('bottender')
const { createServer } = require('bottender/express')

const bot = new LineBot({
  accessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET,
  sessionStore: new FileSessionStore('./sessions', 365 * 24 * 60 * 10) // 10 years
})

bot.onEvent(async context => {
  if (context.event.isFollow) {
    await context.sendText('Hello, welcome to this bot!')
  } else if (context.event.isText && context.event.text === 'How are you?') {
    await context.sendText('I am fine.')
  } else {
    await context.sentText('I do not understand.')
  }
})

const server = createServer(bot)

server.listen(process.env.PORT, () => {
  console.log(`server is running on ${process.env.PORT} port...`)
})
