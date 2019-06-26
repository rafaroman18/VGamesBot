const request = require('request')

const adminDAILY = (ctx,dailyNEW) => {
  
  if(ctx.chat.id == 299947428){ //ID de RafaRoman(ADMIN)
    
    request.get(
    'http://127.0.0.1:8081/daily',
    {},
    (err, res, body) => {
      if (err) {
        console.log(err)
        ctx.reply('No se ha podido completar su solicitud. Inténtelo más tarde\n\n')
        return
      }
      if (res.statusCode !== 200) {
        console.log(res)
        return
      }
      chatIDs = JSON.parse(body).users

      //Una vez reunido los IDs del chat de los suscritos, procedemos a enviar la noticia
      chatIDs.forEach(element => {
        ctx.telegram.sendMessage(element.chatid,ctx.command.args[0])
      })
    },
  )
  }
}

module.exports = adminDAILY