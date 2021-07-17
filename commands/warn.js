const { MessageEmbed } = require("discord.js")
const db = require("quick.db")

module.exports.run = async (client, message, args, prefix) => {




    
    if(!message.member.hasPermission("KICK_MEMBERS")) {
      return message.channel.send("You should have kick members permission to use this command!")
    }
    
    const user = message.mentions.members.first()
    
    if(!user) {
      return message.channel.send("Please Mention the person you want to warn")
    }
    
    if(message.mentions.users.first().bot) {
      return message.channel.send("You can not warn bots")
    }
    
    if(message.author.id === user.id) {
      return message.channel.send("You can not warn yourself")
    }
    
    if(user.id === message.guild.owner.id) {
      return message.channel.send("You can not warn the server owner")
    }
    
    const reason = args.slice(1).join(" ")
    
    if(!reason) {
      return message.channel.send("Please provide reason to warn")
    }
    
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    
  
    
    if(warnings === null) {
      db.set(`warnings_${message.guild.id}_${user.id}`, 1)
      user.send(`You have been warned in **${message.guild.name}** for ${reason}`)
      await message.channel.send(`You warned **${message.mentions.users.first().username}** for ${reason}`)
    } else if(warnings !== null) {
        db.add(`warnings_${message.guild.id}_${user.id}`, 1)
       user.send(`You have been warned in **${message.guild.name}** for ${reason}`)
      await message.channel.send(`You warned **${message.mentions.users.first().username}** for ${reason}`)
    }
    
  
  }