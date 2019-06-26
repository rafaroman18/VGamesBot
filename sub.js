const request = require('request')

const sub = (ctx) => {
if (ctx.command.args.length !=1)
{
    ctx.reply('Por favor, introduzca 1 y sólo 1 ID para suscribirse.\n\n')   
}
else
{
    if(ctx.command.args[0].length<3)
    {
        ctx.reply('El ID debe tener al menos 3 caracteres.\n\n')
    }
    else
    {
        request.post(
            'http://127.0.0.1:8081/sub',{
            json:
            {
                id: ctx.command.args[0],
                chatid: ctx.chat.id,
            }
            },
            function(error,response,body){
                if(error)
                {
                    ctx.reply('Ha ocurrido un error durante su consulta.\n\nVuelva a intentarlo.')
                    console.log('error: ',error)
                }
                else{

                    console.log('statusCode: ',response && response.statusCode);
                    console.log('body: ',body);
                    if(body.existe==true){
                        ctx.reply('Ya existe un usuario registrado con esta cuenta de Telegram.')
                    }
                    else{
                    ctx.reply('Se ha suscrito usted satisfactoriamente bajo el nombre de')
                    ctx.reply(ctx.command.args[0])
                }
                }
            }
            )
    }
    
}
}
module.exports = sub