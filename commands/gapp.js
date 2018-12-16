const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let guildclass = args.join(" ");
    if(!guildclass) return message.channel.reply("Please Tell Us The Role And Reason That You Chose!").then(msg => {msg.delete(5000)})

    message.channel.send("Your Application Has Been Sended To An Administrator. Please Wait For His Respond!").then(msg => {msg.delete(5000)})
    let gapp = new Discord.RichEmbed()
    .setDescription(`A Discord App Has Been Created By <@${message.author.id}>`)
    .setColor("RANDOM")
    .addField("**When He/She Created This App?**", message.createdAt)
    .addField("**Group And Reason Why He/She Want To Join!**", guildclass);

    let guildclasss = message.guild.channels.find(channel => channel.name === "applications");
    if(!guildclasss) return message.channel.reply("Where's my applications channel at?").then(msg => {message.delete(5000)});

    message.delete().catch(O_o=>{});
    guildclasss.send(gapp);

}

module.exports.help = {
  name: "gapp"
}
