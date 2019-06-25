const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

If(!message.member.haspermision("MANAGE_MESSAGES")) return message.channel.send("you're not allowed to use this command!");

Return message.channel.send("Command Accepted").then(message.delete(5000));

}


module.exports.help = {
  name: "massclear"
}
