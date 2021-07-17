const emotes = require("../config/emojis.json");
const { MessageEmbed } = require('discord.js')
const DiscordPages = require("discord-pages");

exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send({embed: {
      title: 'Error',
      description: `You're not in a voice channel ${emotes.error}`,
      color: 'RANDOM'
      }});

    const queue = client.player.getQueue(message);

    if (!queue) return message.channel.send({embed: {
      title: 'Error',
      description: `No songs currently playing ${emotes.error}`,
      color: 'RANDOM'
      }});

    const pages = [];
        let songCount = 10;
        for (let i = 0; i < queue.tracks.length; i += 10) {
            const current = queue.tracks.slice(i, songCount);
            let queueNumber = i;
            songCount += 10;
            const page = current.map(track => `${++queueNumber}. [${track.title}](${track.url}) - ${track.requestedBy.username}`).join('\n');
            const embed = new MessageEmbed()
                .setDescription(page);
            pages.push(embed);
        }
        new DiscordPages({ 
            pages: pages, 
            channel: message.channel, 
        }).createPages();

};