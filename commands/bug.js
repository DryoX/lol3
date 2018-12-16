const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let vbq = args.join(" ");
  if(!vbq) return message.channel.send("Any bug report?");

  message.channel.send("Your Report Has Been Sended!").then(message => {message.delete(5000)});

  let bugEmbed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("**Bug Report**", vbq);

  message.delete().catch(O_o=>{});
  bot.users.get("378074425066520577").send(bugEmbed);

}

module.exports.help = {
  name: "bug"
}
