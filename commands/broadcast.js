const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let bcInfo = args.join(" ");
  if(!bcInfo) return message.reply("Whats The Info?")

  let bcEmbed = new Discord.RichEmbed()
  .setDescription("**~> Broadcast <~**")
  .addField("Mentions To", `@here`)
  .setColor("RANDOM")
  .addField("Broadcasted By", `<@${message.author.id}> with ID: ${message.author.id}`)
  .addField("Time", message.createdAt)
  .addField("Information", bcInfo);

  let bcChannel = message.guild.channels.find(channel => channel.name === "broadcast", "broadcasts");
  if(!bcChannel) return message.channel.send("Please Ask The Owner/Create A broadcast Channel!");

  message.delete().catch(O_o=>{});
  bcChannel.send(bcEmbed);

}

module.exports.help = {
  name: "broadcast"
}
