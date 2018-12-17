const botconfig = require("./botconfig.json");
//const tokenfile = require(./tokenfile.json);
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const requid = [
  " - ",
  "cb!commands",
  "Created by Next",
  "Version 1.1 BETA",
  "Thanks for the invite!"
];
let points = require("./points.json");
let xp = require("./xp.json");


fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
      let props = require(`./commands/${f}`);
      console.log(`${f} Loaded!`);
      bot.commands.set(props.help.name, props);

  });

});

fs.readdir("./music/", (err, filesa) => {

  if(err) console.log(err);

  let jsfilea = filesa.filter(f => f.split(".").pop() === "js")
  if(jsfilea.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfilea.forEach((f, i) =>{
      let propsa = require(`./music/${f}`);
      console.log(`${f} Loaded!`);
      bot.commands.set(propsa.help.name, propsa);

  });

});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online`);
  setInterval(() => {
    let coreiq = Math.floor(Math.random () * (requid.length - 1) + 1);
      bot.user.setActivity(requid[coreiq]);
  }, 4000);
  
});

bot.on("guildMemberAdd", async member => {
  console.log(`${member.id} Joined the server!`);

  let welcomechannel = member.guild.channels.find(`name`, "welcome");
  welcomechannel.send(`Yo Yo Yo... Let's welcomed our new friend ${member}!`)
});

bot.on("guildMemberRemove", async member => {
  console.log(`${member.id} Left the server!`);

  let welcomechannel = member.guild.channels.find(`name`, "welcome");
  welcomechannel.send(`Yo Yo Yo... Whats Going On There! ${member} Why You left Us?`)
});

bot.on("channelCreate", async channel => {
  console.log(`${channel.name} Has Been Created!`);

  let sChannel = channel.guild.channels.find(`name`, "chat");
  sChannel.send(`a wild ${channel} has landed on to our server!`);

});

bot.on("channelDelete", async channel => {
  console.log(`${channel.name} Has Been Deleted!`);

  let sChannel = channel.guild.channels.find(`name`, "chat");
  sChannel.send(`a wild ${channel} has take off to another server!`);
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  }

  if(!points[message.author.id]){
    points[message.author.id] = {
      points: 0
    }
  }

  let pointAmt = Math.floor(Math.random() * 15) + 1;
  let baseAmt = Math.floor(Math.random() * 15) + 1;
  console.log(`${pointAmt} ; ${baseAmt}`);

  if(pointAmt === baseAmt){
    points[message.author.id] = {
      points: points[message.author.id].points + pointAmt
    };
    fs.writeFile("./points.json", JSON.stringify(points), (err) => {
      if (err) console.log(err)
    });
    let pointEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("RANDOM")
    .addField(":moneybag: :arrow_forward: :credit_card:", `${pointAmt} Point Added!`);

    message.channel.send(pointEmbed).then(msg => {msg.delete(5000)});
  }

  let xpAdd = Math.floor(Math.random() * 7) + 8;

  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }

  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 250;
  xp[message.author.id].xp = curxp + xpAdd;
  if(nxtLvl <= xp[message.author.id].xp){
    xp[message.author.id].level = curlvl + 1;
    let lvlup = new Discord.RichEmbed()
    .setTitle("Level Up :up: ")
    .setColor("RANDOM")
    .addField("New Level Up", curlvl + 1);

    message.channel.send(lvlup).then(msg => {msg.delete(5000)});

}

    fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
      if (err) console.log(err)
      });

  let prefix = prefixes[message.guild.id].prefixes;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(message.content.startsWith(prefix)){
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

    }
    
});

  bot.login(process.env.BOT_TOKEN);

  //for those of you that want to use this change "process.env.BOT_TOKEN" with tokenfile.token(and remember to add the const!);
