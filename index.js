'use strict';

const Discord = require("discord.js");
const SpoilerBot = require('discord-spoiler-bot');
const client = new Discord.Client();

let config = {
    token: 'NDM5NTM3MzMxMDI5MDE2NTgw.DcUm6g.ZJ2yrFEZ-qOhyRCgl7D9Q72hRRQ',
    markAllowAll: true,
    maxLines: 16,
};

let bot = new SpoilerBot(config,{disableEveryone: true});

bot.connect("ready", async () => {
});

client.login(process.env.BOT_TOKEN);
