
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "trump",
    category: "extra",
    run: async (client, message, args) => {

        try {
            const text = args.join(' ')
            const url = `https://api.no-api-key.com/api/v2/trump?image=`
            const encoded = url + encodeURIComponent(text);
            console.log(url)
            const embed = new MessageEmbed()
                .setImage(result.url)
            await message.channel.send(embed)
        } catch (e) {
            console.log(e)
        }

    }
}