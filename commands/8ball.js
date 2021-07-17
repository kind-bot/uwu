const Discord = require("discord.js")

module.exports = {
    name: "8ball",
    aliases: ["magic", "8ball"],
    category: "fun",
    description: "Magická koule opýtaj sa otázku",
    usage: "",
    run: (client, message, args) => {
	  
	function doMagic8BallVoodoo() {
		var rand = ['As I see it, yes.',
            'Ask again later',
            'Better not tell you now.',
            'Cannot predict now.',
            'Concentrate and ask again.',
            `Don't count on it.`,
            `It is certain.`,
            `It is decidedly so.`,
            `Most likely.`,
            `My reply is no.`,
            `My sources say no.`,
            `Outlook not so good.`,
            `Outlook good.`,
            `Reply hazy, try again.`,
            `Signs point to yes.`,
            `Very doubtful.`,
            `Without a doubt.`,
            `Yes.`,
            `Yes - definitely.`,
            `You may rely on it`,]
	
		return rand[Math.floor(Math.random()*rand.length)];
	}	  
	  
	 if(!args[0]) return message.channel.send(`${emotes.error} Please write text!`);
	 
	 const embed = new Discord.MessageEmbed()

	.setColor("RANDOM")
	.setTitle("**:black_circle:  MAGIC BALL  :black_circle:**")
    .setDescription("Question: `" + args.join(" ") + "`\nAnswer: `" + doMagic8BallVoodoo() + "`")
	.setFooter(message.author.username, message.author.avatarURL())
	.setTimestamp();
    
	message.channel.send(`${message.author}, ${doMagic8BallVoodoo()}`)
}}