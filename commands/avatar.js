module.exports.run = async (client, message, args, prefix) => {
const {MessageEmbed} = require('discord.js')

      
        let Embed = new MessageEmbed()
        let icon = message.guild.iconURL({ size: 4096, dynamic: true });
        if(!message.mentions.users.first()) {
            Embed.setTitle(`${message.author.tag} avatar`)
            Embed.setImage(message.author.displayAvatarURL({ dynamic: true, size: 4096}))
            Embed.setColor(`RANDOM`)
            return message.channel.send(Embed)
        }
        if (message.mentions.users.first()){
        
            let User = message.mentions.users.first()
            Embed.setTitle(`${User.tag} avatar`)
            Embed.setImage(User.displayAvatarURL({ dynamic: true, size: 4096}))
            Embed.setColor(`RANDOM`)
            return message.channel.send(Embed)
        }
    }