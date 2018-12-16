const Discord = require("discord.js");
let points = require("../points.json");

module.exports.run = async (bot, message, args) => {
  if(!points[message.author.id]){
    points[message.author.id] = {
      points: 0
    };
  }

  let uPoints = points[message.author.id].points;

  let poinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("RANDOM")
  .addField(":moneybag: :arrow_forward: :credit_card:", uPoints);

  message.channel.send(poinEmbed).then(msg => {msg.delete(5000)});
}

module.exports.help = {
  name: "points"
}
