module.exports = (client, message, track) => {

  if(track.duration === 0) track.duration = 'Live'
    message.channel.send({embed: {
      description: `**${client.emotes.music} - Now playing [${track.title}](${track.url})** 〖\`\`${track.duration}\`\`〗`,
      thumbnail: {
        url: `${track.thumbnail}`
      }
    }});

};