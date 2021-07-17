module.exports = (client, message, query, tracks) => {
const {MessageEmbed} = require('discord.js')
const DiscordPages = require("discord-pages");

  const pages = [];
        let songCount = 10;
        for (let i = 0; i < tracks.length; i += 10) {
            const current = tracks.slice(i, songCount);
            let queueNumber = i;
            songCount += 10;
            const page = current.map(tracks => `**${++queueNumber}**. [${tracks.title}](${tracks.url})`).join('\n');
            const embed = new MessageEmbed()
                .setDescription(page)
                .setThumbnail("https://pbs.twimg.com/profile_images/973526995161223171/vJC_Ivp8.jpg")
            pages.push(embed);
        }
        new DiscordPages({ 
            pages: pages, 
            channel: message.channel,
            restricted: (user) => user.id === message.author.id, 
        }).createPages();

};