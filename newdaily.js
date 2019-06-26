const adminDAILY = require('./adminDAILY')

const newdaily = (ctx,dailyNEW) => {
    

if(ctx.chat.id==00000000) //Chat id of the admin 
{
    if(ctx.command.args.length==1)
    {
        if(ctx.command.args[0].length>=10)
        {
            adminDAILY(ctx,ctx.command.args[0])
            return ctx.command.args[0]
        }
        else
        {
            ctx.reply('Introduzca una Web Válida\n\n')
        }

    }
    else
    {
        ctx.reply('Introduzca una y sólo una Web Válida\n\n')
    }
}
else
{
    ctx.reply('Comando sólo disponible para el administrador.\n\n')
    return dailyNEW
}

}

module.exports = newdaily