const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let bcInfo = args.join(" ");
  if(!bcInfo) return message.reply("Whats The Info?")
  
  let bcEmbed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("**Broadcast**", [`Broadcasted By: <@${message.author.id}>`, "**With This Info**", bcInfo])
  message.guild.channels.find(channel => channel.name === "broadcast").send("@here we've a news!").then(message => {message.delete(5000)});

  let bcChannel = message.guild.channels.find(channel => channel.name === "broadcast", "broadcasts");
  if(!bcChannel) return message.channel.send("Please Ask The Owner/Create A broadcast Channel!");

  message.delete().catch(O_o=>{});
  bcChannel.send(bcEmbed);

}

module.exports.help = {
  name: "broadcast"
}
