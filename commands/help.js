const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let helpme = new Discord.RichEmbed()
    .setColor("#5611f7")
    .addField("**Information**", ["For help and support, Please Visit Our Forum", "**[[CLICK HERE TO VISIT OUR FORUM]](https://mmsquad.byethost13.com)**"]);

    return message.channel.send(helpme);
}

module.exports.help = {
  name: "help"
}