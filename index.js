'use strict';

const Discord = require('discord.io');
const SpoilerBot = require('discord-spoiler-bot');

let client = new Discord.Client({
    autorun: true,
});

let config = {
    client: client,
    markAllowAll: true,
    maxLines: 16,
};

let bot = new SpoilerBot(config,{disableEveryone: true});

client.login(process.env.BOT_TOKEN)
    .then(() => bot.connect("ready", async () => {
});
