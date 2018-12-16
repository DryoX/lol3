const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Lol? Sry BruH!");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.member.get(args[0]);
  if(!rMember) return message.reply("No User!");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Chose Your Role!");
  let gRole = message.guild.roles.find(role => role.name === role);
  if(!gRole) return message.reply("Couldn't find that role.");

  if(!rMember.roles.has(gRole.id)) return message.reply("They already have that role!");
  await(rMember.removeRole(gRole.id));

  try{
    await rMember.send(`Sry, But your ${gRole.name} role has been removed`)
  }catch(e){
    message.channel.send(`Sry to <@${rMember.id}>, we've removed your role ${gRole.name}. We tried to DM them, but their DMs are locked!`)
    }


  }

  module.exports.help = {
    name: "removerole"
  }
