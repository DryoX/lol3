const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let abouta = new Discord.RichEmbed()
  .setColor("#00ffe9")
  .addField("**About**", ["`This Bot Is Created By RtzFurry - ID:378074425066520577`", "`If you have any issue because of this bot! Please DM me!`", "`This bot is opened for all server!`", "`If you want to add it feel free to`", "**[[INVITE ME]](https://discordapp.com/api/oauth2/authorize?client_id=519733784535629825&permissions=8&scope=bot)**", "`This bot is hosted on a internet host wich is safe and usable!`", "`Global prefix for this bot is: cb!`", "`~> Notice <~`", "`If you want to change the prefix of the bot , simply use cb!prefix (prefix)`", "`For more information you can check cb!commands`", "` Thank You for using this bot!`", "`~ RtzFurry`"]);

    return message.channel.send(abouta);
}

module.exports.help = {
  name: "about"
}
