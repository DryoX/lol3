const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let commander = new Discord.RichEmbed()
  .setDescription("**All Commands That I Have | My Global Prefix Is V! **")
  .setColor("#00ffe9")
  .addField("**Help Command**", ["`commands | see all my commands`", "`bug | Report bug if you've found one!`", "`about | Bot Owner,Ect`"])
  .addField("**Admin Commands**", ["`say (text)| let all player see that bot can speak!`", "`prefix | Usage: prefix (Your Prefix)`", "`tm | Usage: tm (name/id) (s/h/d)`", "`warn | Usage: warn (name/id) 3x warn = kicked`", "`wl | Usage: wl (name/id)`", "`kick | Usage: kick (name/id) (reason)`", "`ban | Usage: ban (name/id) (reason)`", "`clear | Usage: clear (1-100)`", "`addrole | Usage: addrole (name/id) (role)`", "`removerole | Usage: removerole (name/id) (role)`"])
  .addField("**Public Command**", ["`report | Usage: report (name/id) (reason)`", "`ping | Usage: ping`", "`profile | Usage: profile`", "`serverinfo | Usage: serverinfo`", "`broadcast | Usage: brodcast (message)`", "`dog | Usage: dog`", "`cat | Usage: cat`", "`botinfo | Usage: botinfo`", "`guess | Usage: guess (question)`", "`chose | Usage: chose (1),(2),(3),...`"])
  .addField("**Points Commands**", ["`givepoints | Usage: gp (name/id) (Ammount of points)`", "`points | Usage: points`", "`xp | Usage: xp`"]);

  return message.channel.send(commander);


}

module.exports.help = {
  name: "commands"
}
