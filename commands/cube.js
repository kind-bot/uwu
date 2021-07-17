const Discord = require("discord.js")

module.exports = {
    name: "cube",
    aliases: ["cubes"],
    category: "fun",
    description: "You roll the dice 1-9",
    run: (client, message, args) => {

	var randomNunber = Math.floor(Math.random() * `6` + 1);
	
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(":game_die: CUBE :game_die: ")
    .setDescription("You threw a dice and you dropped the number `" + (randomNunber) + "`")
	.setFooter(message.author.username, message.author.avatarURL())
	.setThumbnail("http://hyro.wz.sk/upload/uploads/gifcube.gif")
    .setTimestamp();

      message.channel.send({embed}).then(embedMessage => {
		    embedMessage.react("🎲");
	    })
  }}