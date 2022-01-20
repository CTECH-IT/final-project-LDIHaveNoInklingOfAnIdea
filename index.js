const discordJS = require("discord.js");

require('dotenv').config();


const prefix = "-";
const client = new discordJS.Client({
    intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_BANS", "GUILD_MEMBERS"]
});

client.once('ready', () => {
   console.log("the bot is ready")
});
client.on("messageCreate", (message) => {

    if (message.content === "ping") {
        message.reply({ content: "pong!"})

    }else if(message.content === "woomy") {
        message.reply({
          content: "veemo"})
    }else if(message.content === "floppa sux") {
        message.reply({
          content: "NO U SUCK"})
    }else if(message.content === "has earth ended yet") {
        message.reply({
          content: "no"})
    }else if(message.content === "how are you feeling today polysquid") {
        message.reply({
          content: "sussy"})
    }else if(message.content === "anyone wanna smash?") {
        message.reply({
          content: "like the video game orrr................"})
    }

});





client.login("Nzg0NTcyODY3MjYyMTUyNzA0.X8rQbA.xySK2BaMrrOwAT5HhyBEmyAyGJ8");