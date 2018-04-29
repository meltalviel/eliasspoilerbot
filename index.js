'use strict';

const Discord = require('discord.js');
const SpoilerBot = require('discord-spoiler-bot');

let client = new Discord.Client();

let config = {
    client: client,
    markAllowAll: true,
    maxLines: 16,
};

let bot = new SpoilerBot(config);
client.login(process.env.BOT_TOKEN)
    .then(() => bot.connect());
