'use strict';

const Discord = require("discord.js");
const client = new Discord.Client();

let config = {
    markAllowAll: true,
    maxLines: 16,
};

client.login(process.env.BOT_TOKEN);
