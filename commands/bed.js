const canvacord = require("canvacord")
const { MessageAttachment } = require("discord.js")
module.exports.run = async (client, message, args, prefix) => {


    let image2 = message.mentions.users.first().displayAvatarURL({ format: "png", dynamic: false })
    if(!image2) return message.channel.send(`${emotes.error} You need to mention a member!`)
    let image1 = message.author.displayAvatarURL({ format: "png", dynamic: false })
    let bed = await canvacord.Canvas.bed(image1, image2)
    let attachment = new MessageAttachment(bed, "bed.png")
    return message.channel.send(attachment)
    
  }