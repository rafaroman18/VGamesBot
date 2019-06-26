const Telegraf = require('telegraf')
const commandArgs =  require('./arguments')
const sub = require('./sub')
const info = require('./info')
const newdaily = require('./newdaily')


const bot = new Telegraf("841194137:AAEfwSI2U9nDDPZdx91H7q7io9l3OuAGzI8")
dailyNEW = "https://www.hobbyconsolas.com/"

// Habilitamos la función commandArgs
bot.use(commandArgs)

// Comandos principales
bot.start((ctx) => ctx.reply('¡Bienvenido al Bot de VGames! \nEscriba /help para ver los comandos disponibles.'))
bot.help((ctx) => ctx.reply('/sub -> Quedas suscrito al bot, con lo cual ¡recibirás una noticia diaria de videojuegos!\n\n/daily -> Muestra de nuevo la noticia diaria.\n\n /first -> Conoce a fondo el inicio de los videojuegos.\n\n /info -> Muestra información acerca del BOT.\n\nTambién encontrarás Easter Eggs ocultos cuando escribas ciertas palabras, los cuales te proporcionarán información...'))
bot.command('first',(ctx) => {ctx.replyWithPhoto('https://i.gyazo.com/6087a4b0d24607471dc5bc3f55c7d07e.png'),ctx.reply('El 18 de octubre de 1958, el físico William Higinbotham presentaba el que sería considerado como el primer videojuego de la historia. El juego, bautizado Tennis For Two, fue desarrollado a partir de una computadora analógica conectada a un osciloscopio, que hacía las veces de monitor. Consistía en un campo de juego, representado por una línea horizontal en el borde inferior de la pantalla, y una línea vertical que funcionaba como red. A cada lado, un jugador golpeaba una bola, determinando el ángulo de lanzamiento. Además, el juego permitía determinar la altura de la red y la longitud del campo. Una característica singular del Tennis For Two era que utilizaba un punto de vista lateral, a diferencia de populares sucesores como el PONG en que el “campo de juego” era visto desde arriba. El videojuego fue mostrado en el Brookhaven National Laboratory, pero no llegó a comercializarse.\n\nHiginbotham, el científico estadounidense detrás de esta revolucionaria creación, nació el 25 de octubre de 1910 y falleció el 10 de noviembre de 1994. Otro proyecto en el que se vio envuelto, no tan lúdico como el de Tennis For Two, fue el Proyecto Manhattan, en el desarrollo de la bomba atómica. \n\nFuente: https://mx.tuhistory.com/hoy-en-la-historia/se-lanza-tennis-two-considerado-el-primer-videojuego-de-la-historia')})
bot.command('sub',sub)
bot.command('info',info)
bot.command('daily',(ctx) => ctx.reply(dailyNEW))

//Comando sólo para el ADMIN
bot.command('adminDAILY',(ctx)=>{dailyNEW = newdaily(ctx,dailyNEW)})

//Easter Eggs
bot.hears('pacman',(ctx) => ctx.replyWithVideo('http://dl37.y2mate.com/?file=M3R4SUNiN3JsOHJ6WWQ2a3NQS1Y5ZGlxVlZIOCtyZ3dsOGN2K0JrMEFMOU5xSVFRMVBhbElzMUFQSmdMeUxXeUVOMXIrRC9XVHRPRVBRcUt1WnNwVVV5UjlzUThoalBBNExFaFZNQjJXUVhIa2VxU3JnNXgwQjNXYllEeVJ1NEdmVGwyc3hRbDFTK2Z5YzdFdUFIdzdqai9nVlNNZVRBZnNENU9iOVBkNGNzTmgwL05LcVhDeXNJSXJES2FySmxHMTd2US94WDUwYWNCc2N0MFNrVjZlcTlleTUvMDIvL2Vta01jdjRrZDJYS3BxT3laQlpFNEdhYVJlamhqQVRJSSsrN1FVQlFOOENRVDhXdXg1WkF2NGxFeFRxY3M4a0dub2MyNk1HK0lNTS9tRzllSEp1RzRxTkhRMHFRNTZ3K1MvNjJXeTh3T3oxemhUZER2VDhNTnBVWXVwUDdTc0psbG1nRGhnMVpQ'))
bot.hears('tetris',(ctx) =>{ctx.replyWithAudio('https://sv85.onlinevideoconverter.com/download?file=d3c2j9e4e4f5a0f5'),ctx.reply('El tetris, uno de los juegos de ordenador más populares del mundo, fue creado en 1985 por el inventor Alexei Pajitnov, que entonces trabajaba en la Academia Soviética de la Ciencia, en Moscú.\n\nBásicamente, el tetris consiste en ir encajando piezas de diferentes formas y tamaños que caen desde la parte superior de la pantalla para completar un muro sin dejar huecos.\n\nEl juego fue lanzado al mercado durante la Perestroika, el plan diseñado por Mijaíl Gorbachov para relanzar la economía soviética. Y, aunque fue un éxito rotundo -se vendieron más de 40 millones de copias-, Pajitnov no recibió ni un solo rublo de los beneficios obtenidos. En la actualidad, este ruso vive en Estados Unidos y trabaja desarrollando nuevas versiones de su juego para la firma Nintendo.\n\nDescubre la melodía tan conocida del videojuego a continuación.')})


bot.launch()
