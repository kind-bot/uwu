const Discord = require('discord.js')
const pagination = require('discord.js-pagination')
const prefix = 'p-'
module.exports.run = async (client, message, args) => {
const page = new Discord.MessageEmbed()
.setColor('#F1C40F')
      .setTitle('Practice Help Menu :four_leaf_clover: ')
      .setDescription('PikaNetwork Practice is a Discord Bot Made for PikaNetwork Practice Discord Server, this bot is a powerful bot that has everything that you could think of.\n\n:two: Second Page:\nUtility Commands\n\n:three: Third Page:\nModeration Commands 🛠️\n\n:four: Fourth Page:\nFun Commands 🎳\n\n:five: Fifth Page:\nMusic Commands 🎧\n\nTo scroll between pages Click The reactions: ◀️ ▶️')
      .setFooter(`About ${client.user.username}`)
      .setTimestamp()
      const general = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle(`${client.user.username} Utility :dolphin: `)
    .setDescription(`
    \`\`${prefix}mcserver\`\` = Sends Information About a Minecraft server
    \`\`${prefix}mcskin\`\` = Sends an Image of your Minecraft Skin
    \`\`${prefix}userinfo\`\` = Sends Info About Your Account *e-mail and password aren't included*
   \`\`${prefix}serverinfo\`\` = Sends information about PikaNetwork Practice Server.
    \`\`${prefix}avatar\`\` = Sends Your Profile Picture
    \`\`${prefix}giveaway\`\` = Starts a giveaway
    `)
    .setThumbnail(client.user.avatarURL())
    .setTimestamp()

    const moderation = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle(`${client.user.username} Moderation :tools:`)
    .setThumbnail(client.user.avatarURL())
    .setDescription(`
    \`\`${prefix}ban\`\` = Bans a member from the server
    \`\`${prefix}timedlockdown\`\` = Locks a channel for a period of timedlockdown
    \`\`${prefix}warn\`\` = Warn a member
    \`\`${prefix}reset-warns\`\` = Reset all warns of a member
    \`\`${prefix}clear\`\` = Clear Messages
    \`\`${prefix}kick\`\` = Kick a member from the server
    
    `)
    .setTimestamp()

    const fun = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle(`${client.user.username} Fun :bowling:`)
    .setThumbnail(client.user.avatarURL())
    .setDescription(`
    \`\`${prefix}8ball\`\` = Ask me a question and i'll respond
    \`\`${prefix}bed\`\` = A *funny* Command
    \`\`${prefix}pixelate\`\` = Sends a PIXELATED version of your profile picture
    \`\`${prefix}wanted\`\` = Puts Your Profile Picture In a Wanted Post

    `)
    .setTimestamp()
    const music = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle(`${client.user.username} Music :headphones:`)
    .setThumbnail(client.user.avatarURL())
    .setDescription(`
    \`\`${prefix}play\`\` = Play a song in the voice channel you're in
    \`\`${prefix}stop\`\` = Stop The Current song
    \`\`${prefix}skip\`\` = Skip The Current song
    \`\`${prefix}clear-queue\`\` = Clear The queue
    \`\`${prefix}loop\`\` = Loop The Current song
    \`\`${prefix}volume\`\` = Sets The Volume of The Bot
    \`\`${prefix}shuffle\`\` = Shuffle The queue
    \`\`${prefix}np\`\` = Sends Information About The Current song
    \`\`${prefix}resume\`\` = Resume The Paused Track
    \`\`${prefix}pause\`\` = Pause The Current song
    \`\`${prefix}queue\`\` = Shows All the queued songs

    `)
    .setTimestamp()



    const emojilist = ["◀️", "▶️"] 

    const pages = [
      page,
      general,
      moderation,
      fun,
      music
    ]

    const timeout = "300000";

    pagination(message, pages, emojilist, timeout)
    }