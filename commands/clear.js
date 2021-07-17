module.exports = {
    name: "clear",
    description: "Chat Cleaning (Message)",

    async run (client, message, args) {

        const amount = args.join(" ");

        if(!amount) return message.reply(`${emotes.error} Enter how many messages you want to delete.`)

        if(amount > 100) return message.reply(`${emotes.error} You cannot delete more than 100 messages.`)

        if(amount < 1) return message.reply(`Wait, you've already deleted it.`)

        await message.channel.messages.fetch({limit: amount}).then(messages => {
            message.channel.bulkDelete(messages

   
    )});

    
    message.channel.send(`Deleted ${amount} Messages!`)
  .then(msg => {
    msg.delete({ timeout: 10000 })
  })

    }
}