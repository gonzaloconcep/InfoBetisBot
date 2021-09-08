require('dotenv').config()
const { Telegraf } = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there!'))

bot.command('oldschool', (ctx) => ctx.reply('Command oldschool'))
bot.command('hipster', Telegraf.reply('λ'))

// bot.command('quit', (ctx) => {
//     // Explicit usage
//     ctx.telegram.leaveChat(ctx.message.chat.id)
  
//     // Using context shortcut
//     ctx.leaveChat()
//   })
  
//   bot.on('text', (ctx) => {
//     // Explicit usage
//     ctx.telegram.sendMessage(ctx.message.chat.id, `Hello ${ctx.state.role}`)
//     console.log(ctx.message);
  
//     // Using context shortcut
//     ctx.reply(`Hello ${ctx.state.role}`)
//   })
  
//   bot.on('callback_query', (ctx) => {
//     // Explicit usage@
//     ctx.telegram.answerCbQuery(ctx.callbackQuery.id)
  
//     // Using context shortcut
//     ctx.answerCbQuery()
//   })
  
//   bot.on('inline_query', (ctx) => {
//     const result = []
//     // Explicit usage
//     ctx.telegram.answerInlineQuery(ctx.inlineQuery.id, result)
  
//     // Using context shortcut
//     ctx.answerInlineQuery(result)
//   })

  bot.command('test', (ctx) => ctx.replyWithPhoto({
    url: 'https://picsum.photos/200/300/?random',
    filename: 'kitten.jpg'
  }))

  bot.on('message', (ctx) => {
    // resend existing file by file_id
    ctx.replyWithSticker('123123jkbhj6b')
  
    // send file
    ctx.replyWithVideo({ source: '/path/to/video.mp4' })
  
    // send stream
    ctx.replyWithVideo({
      source: fs.createReadStream('/path/to/video.mp4')
    })
  
    // send buffer
    ctx.replyWithVoice({
      source: Buffer.alloc()
    })
  
    // send url via Telegram server
    ctx.replyWithPhoto('https://picsum.photos/200/300/')
  
    // pipe url content
    ctx.replyWithPhoto({
      url: 'https://picsum.photos/200/300/?random',
      filename: 'kitten.jpg'
    })
  })

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
