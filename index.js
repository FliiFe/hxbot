const Discord = require('discord.js');
const bot = new Discord.Client();
const { token } = require('./token.json');
const srand = seed => require('seedrandom').alea(seed)();

const note = author => Math.floor(srand(author + Math.floor(Date.now()/(60*60*24*7))) * 81)/4;

bot.on('message', message => {
    if(message.content.indexOf('@hxbot ') !== 0 && message.content.indexOf('<@495639811298820099> ') !== 0) return;
    if(message.content.includes('note') || message.content.includes('ds')) message.reply(`Note au prochain DS: ${note(message.author.username)}`);
});

bot.on('ready', () => console.log('Connected !'));

bot.login(token);
