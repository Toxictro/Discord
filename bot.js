const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!";
client.on('ready', ()=>{
  console.log(`Logged in as ${client.user.tag}! Welcome Back`);
  client.user.setActivity("Twitch.tv/asdrtyuip", {type: 1});
  client.login("NDg1MjA1MDM3NjM1ODYyNTMw.Dmv__A.SFgXJESVneVQHinMjkE2oJdnsEM");
});

client.on('guildMemberAdd', member => {
  let channel = member.guild.channels.find('name', 'welcome-leave');
  let memberavatar = member.user.avatarURL
      if (!channel) return;
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(memberavatar)
      .addField(':bust_in_silhouette: | name : ', `${member}`)
      .addField(':microphone2: | Welcome!', `Welcome to the server, ${member}`)
      .addField(':id: | User :', "**[" + `${member.id}` + "]**")
      .addField(':family_mwgb: | Your are the member', `${member.guild.memberCount}`)
      .addField("Name", `<@` + `${member.id}` + `>`, true)
      .addField('Server', `${member.guild.name}`, true )
      .setFooter(`**${member.guild.name}**`)
      .setTimestamp()

      channel.sendEmbed(embed);
});
client.on('guildMemberAdd', member => {

  console.log(`${member}`, "has joined" + `${member.guild.name}`)

});

client.on('guildMemberRemove', member => {
  let channel = member.guild.channels.find('name', 'welcome-leave');
  let memberavatar = member.user.avatarURL
      if (!channel) return;
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(memberavatar)
      .addField('Name:', `${member}`)
      .addField('Has Let the Server', ';(')
      .addField('Bye Bye :(', 'We will all miss you!')
      .addField('The server now as', `${member.guild.memberCount}` + " members")
      .setFooter(`**${member.guild.name}`)
      .setTimestamp()

      channel.sendEmbed(embed);
});
client.on('guildMemberRemove', member => {
  console.log(`${member}` + "has left" + `${member.guild.name}` + "Sending leave message now")
  console.log("Leave Message Sent")
});


client.on('message', (message)=>{
  if(!message.content.startsWith(prefix)) return;

  if(message.content.startsWith(prefix + "cash info")){
      message.channel.send("`Cash CMD`, **!work, !slut !crime !rob [USER]**");

      
    }
    if(message.content.startsWith(prefix + "REQUESTION9")){
      message.channel.send("`Requested by`"  + message.author + ".");
      message.channel.send("`Form` **NAME: [Name of private Chat]**");
      message.channel.send("`Form` **USER [INVITE PEOPLE]**");
    }



  if(message.content.startsWith(prefix + "help")){
    message.channel.send("**`Command's / info`**");
    message.channel.send({embed:{
      color: 0xee00ff,
      description: "**Help? : This is a Community of Asd use !cash info / !Access**"

    }});
    return;

  }


      if (message.content.startsWith(prefix + "Remove")){
        let args = message.content.split(" ").slice(1);
        let author = message.member;
        let role = message.guild.roles.find('name',"Staff");
        if(author.roles.has(role.id)){
          if (!args[0]){
            message.delete();
            message.author.send("No Arguments Given.");
            return;
          }
          if (args[0] > 100){
            message.delete();
            message.author.send("Maxiumum is 100 Messages at once.");
            return;

          }

          message.delete();
          message.channel.bulkDelete(args[0]);
          message.author.send({embed:{
            color: 0x28d62b,
            description: "Done, I have Deleted " + args[0] + "  Message's."
            
          }});
          return;

        }
      }
      if(message.content.startsWith(prefix + "Access")){
        let author = message.member;
        let role = message.guild.roles.find('name',"-Access-");
        if(author.roles.has(role.id)){
         message.author.send("`You Have Permissions` **To Private VC this Will Remove in 1 DAY**");
          return;
   
        }else{
          message.reply("you dont have Permissions.`To -Access-` Ask a Mod or #Rank-info");
      }
    }
})

        client.login("NDg1MjA1MDM3NjM1ODYyNTMw.Dmv__A.SFgXJESVneVQHinMjkE2oJdnsEM");
