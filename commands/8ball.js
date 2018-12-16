const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!args[1]) return message.reply("Full Question?");
  let replies = ["Yes.", "No.", "Idk!(ツ)_/¯", "Ask Again,Cuz i dind read your question!"];

  let result = Math.floor((Math.random() * replies.length));
  let question = args.slice(0).join(" ");

  let ballembed = new Discord.RichEmbed()
  .setAuthor(message.author.tag, +"i have answare for you!")
  .setColor("RANDOM")
  .addField("Question", question)
  .addField("Answer", replies[result]);

  message.channel.send(ballembed);

}

module.exports.help = {
  name: "guess"
}
