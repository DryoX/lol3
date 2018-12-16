const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

 let qwe = args.toString().split(",");

 let quw = Math.floor(Math.random() * (qwe.length));

    let embedhe = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField("**i chose!**", qwe[quw]);

    return message.channel.send(embedhe);

}

module.exports.help = {
  name: "chose"
}
