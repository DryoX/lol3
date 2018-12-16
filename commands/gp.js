const Discord = require("discord.js");
const fs = require("fs");
let points = require("../points.json");

module.exports.run = async (bot, message, args) => {
  if(!points[message.author.id]){
    return message.reply("You Dont Have Any Point! Chat For More Point!")
  }

  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);

  if(!points[pUser.id]){
    points[pUser.id] = {
      points: 0
    };
  }

  let pPoints = points[pUser.id].points;
  let sPoints = points[message.author.id].points;

  if(sPoints < args[0]) return message.reply("Not Enough Point");

  points[message.author.id] = {
    points: sPoints - parseInt(args[1])
  };

  points[pUser.id] = {
    points: pPoints + parseInt(args[1])
  };

  message.channel.send(`${message.author} has given ${pUser} ${args[1]} points.`);

  fs.writeFile("./points.json", JSON.stringify(points), (err) => {
    if (err) console.log(err)
  });

}

module.exports.help = {
  name: "gp"
}
