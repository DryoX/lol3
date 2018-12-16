const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let myprof = new Discord.RichEmbed()
  .setDescription("Your Profile Is!")
  .setColor("#00ffe9")
  .addField("Your Profile Created At", message.author.createdAt)
  .addField("You Joined This Server At", message.member.joinedAt)
  .addField("Your Role", message.member.role)
  .addField("Your Ping To The Bot!", bot.ping)
  .setTimestamp()

  return message.channel.send(myprof);

}

module.exports.help = {
  name: "profile"
}
