const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!";
client.on('ready', ()=>{
  console.log(`Logged in as ${client.user.tag}! Welcome Back`);
  client.user.setActivity("Twitch.tv/asdrtyuip", {type: 1});
  client.login("NDg1MjA1MDM3NjM1ODYyNTMw.Dmv__A.SFgXJESVneVQHinMjkE2oJdnsEM");
});
