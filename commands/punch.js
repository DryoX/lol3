const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let punched = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!punched) return message.channel.reply("Can I Punch You? Because You Dind Select The Player :v");

let randomone = ["http://i64.tinypic.com/207p5y1.gif", "http://i63.tinypic.com/2uhu8tx.gif", "http://i64.tinypic.com/2dhh9ty.gif"];
let byrandom = Math.floor((Math.random() * randomone.length));

let myembed = new Discord.RichEmbed()
.setColor("#5611f7")
.addField("**CN0 News 24/5 Report**", [`A Human And Maybe A Computer Has Been Punched By <@${message.author.id}>`, `And That Human Or Computer Owner Is Identified Named ${punched}`, "Poor... And Good Luck Mate!"])
.setImage(randomone[byrandom]);

return message.channel.send(myembed);

}

module.exports.help = {
  name: "punch"
}