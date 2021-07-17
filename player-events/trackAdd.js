module.exports = (client, message, queue, track) => {

    message.channel.send({embed: {
      description: `${client.emotes.music} - [${track.title}](${track.url}) has been added to the queue! (${track.duration})`,
      color: 'RANDOM',
      thumbnail: {
        url: `${track.thumbnail}`
      }
    }});

};