const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
          let bicon = bot.user.iconURL;
          let botembed = new Discord.RichEmbed()
          .setDescription("Bot Information")
          .setColor("#00ffe9")
          .setThumbnail(bicon)
          .addField("Bot Name", bot.user.username)
          .addField("Created On", bot.user.createdAt)
          .addField("Bot Creator", "@RtzFurry")
          .setTimestamp()

          return message.channel.send(botembed);

}

module.exports.help = {
  name: "botinfo"
}
