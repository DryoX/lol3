const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!bUser) return message.channel.send("Can't find user!");
  let bReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Nope, Permission Require");
  if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Too OP To Get Ban");

  let banEmbed = new Discord.RichEmbed()
  .setDescription("This Player Banned Because Of This Report And Reason!")
  .setColor("#ff0000")
  .addField("Banned User", `${bUser} with ID: ${bUser.id}`)
  .addField("Banned By", `<@${message.author.id}> with ID: ${message.author.id}`)
  .addField("Banned In", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", bReason);

  let banChannel = message.guild.channels.find(`name`, `botlog`);
  if(!banChannel) return message.channel.send("Can't find botlog channel");

  message.delete().catch(O_o=>{});
  message.guild.member(bUser).ban(bReason);
  banChannel.send(banEmbed);

  }

  module.exports.help = {
    name: "ban"
  }
