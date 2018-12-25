const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

let atest = new Discord.RichEmbed()
   .setColor("RANDOM")
   .addField("**Information**", "**This is a test command!**");

return message.channel.send(atest).then(message => {message.delete(5000)});

}
module.exports.help = {
name: "testing"
}
