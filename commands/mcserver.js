const emotes = require("../config/emojis.json");
const {MessageEmbed} = require('discord.js')
module.exports.run = async (client, message, args, prefix) => {
  const util = require("minecraft-server-util")
  if(!args[0]) return message.channel.send(`${emotes.error} - You didnt specify a minecraft server address`)

  util.status(`${args[0]}`) 
  .then((response) => {
    const embed = new MessageEmbed()
    .setTitle('Server Status')
    .addField('Server IP', response.host)
    .addField('Server Version', response.version)
    .addField('Online Players', response.onlinePlayers)
    .addField('Max Players', response.maxPlayers)
    message.channel.send(embed)
  })
}