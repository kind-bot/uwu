const canvacord = require("canvacord")
const Discord = require('discord.js')
const { MessageAttachment } = require("discord.js")

exports.run = async (client, message, args) => {
  let mention = message.mentions.users.first() || message.author;
    let image = mention.displayAvatarURL({ size: 4096, dynamic: false, format: 'png' });
        let pp = await canvacord.Canvas.wanted(image);
        let attachment = new Discord.MessageAttachment(pp, "wanted.png");
        return message.channel.send(attachment);
  }