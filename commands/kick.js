module.exports.run = async (client, message, args, prefix) => {
if (!message.member.hasPermission("KICK_MEMBERS") || !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("<:8750pikawhat:865176100681940992> You don't have a permissions to do this.");
  
      let user = message.mentions.users.first();
      
      
      let member = message.guild.member(user);
      let reason = args.slice(1).join(" ");
      
      if (!user) return message.channel.send("<:8750pikawhat:865176100681940992> Mention The user you want to kick from the server");
      if (user.id === message.author.id) return message.channel.send("<:8750pikawhat:865176100681940992> You can't kick yourself.");
      if (user.id === client.user.id) return message.channel.send("<:8750pikawhat:865176100681940992> You can't do that..");
      
      if (!reason) reason = "No reason provided";
      
      member.kick(reason).then(() => {
        message.channel.send({embed: {
          color: 'RANDOM',
          description: `**${user.tag}** has been kicked from ${message.guild.name}`,
          fields: [
            {
              name: 'Reason: ',
              value: `${reason}`,
              inline: true
            }
          ]
        }});
      })
}