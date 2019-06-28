const Discord = require('discord.js');
const bot = new Discord.Client();
bot.on('ready', function () {
    bot.user.setGame("CookieBot");
    console.log("Je suis connecté !")
    });
    bot.login('process.env.TOKEN')

    bot.on('message', message => {
        if (message.content === 'cookie') {
        message.channel.sendMessage('Eat me !');
        }
        })
    bot.on('message', message => {
         if (message.content === 'cookies') {
        message.channel.sendMessage('Eat me !');
        }
        });

   
