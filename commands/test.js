const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

let reason = args.join(" ");
let user = `$<@{message.author.id}>`;

return message.channel.send("Okay you are now afk!").then(message => {message.delete(5000)});

if(user) return message.channel.send(`That person is afk and the reason is` + reason);

if(message.author.id) return message.channel.send("You are now leaving afk room!");

}
module.exports.help = {
name: "testing"
}
