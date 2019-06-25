const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Nope!");

message.channel.bulkDelete(delete).then(() => {
  message.channel.send(`Cleared messages.`).then(msg => msg.delete(5000));
});

}

module.exports.help = {
  name: "mclear"
}
