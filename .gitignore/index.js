const Discord = require('discord.js');
const bot = new Discord.Client();
bot.on('ready', function () {
    bot.user.setGame("CookieBot, !help");
    console.log("Je suis connecté !")
    });
    bot.login('process.env.NTk0MTcwMjYzMzUyOTAxNjM1.XRYing.00T4p0c7yAXehj33vWU7YDPQVNU')

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

   
