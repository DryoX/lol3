const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let authora = args.join(" ");
    if(!authora) return message.channel.send("Not Ready YET!")

    let play = new Discord.RichEmbed()
    .setColor("#5611f7")
    .setDescription("**Wait What? How Can You Find This Command?**")
    .addField("**Warning**", ["This Command Is'nt Ready YET!"]);

    return message.channel.send(play).then(msg => {msg.delete(5000)});
}

module.exports.help = {
  name: "play"
}