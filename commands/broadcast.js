const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let bcInfo = args.join(" ");
  if(!bcInfo) return message.reply("Whats The Info?")

  let channes = bot.channels.find('name', "broadcast").channel.send("@here we've a new broadcast");
  if(!channes) return message.channel.send("Create a broadcast channel first Named:broadcast")
  
  let bcEmbed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("**Broadcast**", [`Broadcasted By: <@${message.author.id}>`, "**With This Info**", bcInfo]);

  let bcChannel = message.guild.channels.find(channel => channel.name === "broadcast", "broadcasts");
  if(!bcChannel) return message.channel.send("Please Ask The Owner/Create A broadcast Channel!");

  message.delete().catch(O_o=>{});
  bcChannel.send(bcEmbed);

}

module.exports.help = {
  name: "broadcast"
}
