
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "trump",
    category: "extra",
    run: async (client, message, args) => {

        try {
            const text = args.join(' ')
            const url = `https://api.no-api-key.com/api/v2/trump?message=`
            const encoded = url + encodeURIComponent(text);
            console.log(url)
            const embed = new MessageEmbed()
                .setImage(encoded)
            await message.channel.send(embed)
        } catch (e) {
            console.log(e)
        }

    }
}