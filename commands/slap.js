const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let slaps = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!slaps) return message.channel.send("Who the one that i can slap? you?");

    let imager = ["http://i68.tinypic.com/13zph5l.gif", "http://i68.tinypic.com/20saerl.gif", "http://i65.tinypic.com/kuq21.gif"];
    let myimager = Math.floor((Math.random() * imager.length));

    let slapers = new Discord.RichEmbed()
    .setColor("#5611f7")
    .addField("CN0 News Report 24/5", [`A Human Has Been Slapped By <@${message.author.id}>!`, `That Human Is Identified With Name: ${slaps}`, "And Ouch,Thats Feel Hurt :v. Good Luck Mate!"])
    .setImage(imager[myimager]);

    return message.channel.send(slapers);

}

module.exports.help = {
  name: "slap"
}
