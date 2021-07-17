const canvacord = require("canvacord")
const { MessageAttachment } = require("discord.js")

module.exports.run = async (client, message, args, prefix) => {



    let mention = message.mentions.users.first() || message.author;
    let pixelate = await canvacord.Canvas.pixelate(mention.displayAvatarURL({ format: "png", size: 4096, dynamic: false }))
    let attachment = new MessageAttachment(pixelate, "pixelate.png")
    return message.channel.send(attachment)
  }
