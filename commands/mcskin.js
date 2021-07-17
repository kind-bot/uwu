const Discord = require("discord.js")

module.exports = {
    name: "mcskin",
    
    run: (client, message, args) => {
      
	const skin = parseInt(args[0]);
	if(!args[0]) return message.channel.send(`${emotes.error} - Please write text!`);

     const embed = new Discord.MessageEmbed()
   .setColor("RANDOM")
   .setTitle("MC SKIN")
   .setDescription("Skin `" + `${args[0]}` + "`\n[▶ Download](https://minotar.net/download/" + `${args[0]}` + ")")
   .setFooter(message.author.username, message.author.avatarURL())
   .setImage("https://minotar.net/armor/body/" + `${args[0]}` + ".png")
   .setThumbnail("https://minotar.net/cube/" + args[0] + "/100.png")
   .setTimestamp();

    message.channel.send({embed})
    }}