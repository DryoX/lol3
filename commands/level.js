const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }

  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 250;
  let diffrence = nxtLvlXp - curxp;

    let lvlup1 = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setTitle("Level", curlvl, true)
    .setColor("RANDOM")
    .addField("Xp", curxp, true)
    .setFooter(`${diffrence} Xp Till Level Up`, message.author.displayAvatarURL);

    message.channel.send(lvlup1);

}

module.exports.help = {
  name: "level"
}
