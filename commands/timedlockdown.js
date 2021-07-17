const ms = require('ms');

module.exports.run = async (client, message, args, prefix) => {
if (!client.lockit) client.lockit = [];
  let time = args.join(' ');
  let validUnlocks = ['lock', 'unlock'];
  if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("❌ You don't have the permission to do that!");
  if (!time) return message.reply('You must set a duration for the lockdown in either hours, minutes or seconds');

  if (validUnlocks.includes(time)) {
    message.channel.createOverwrite(message.guild.id, {
      SEND_MESSAGES: null
    }).then(() => {
      message.channel.send('Lockdown lifted.');
      clearTimeout(client.lockit[message.channel.id]);
      delete client.lockit[message.channel.id];
    }).catch(error => {
      console.log(error);
    });
  } else {
    message.channel.createOverwrite(message.guild.id, {
      SEND_MESSAGES: false
    }).then(() => {
      message.channel.send(`**${message.author.username}** just locked the channel down for ${ms(ms(time), { long:true })}`).then(() => {

        client.lockit[message.channel.id] = setTimeout(() => {
          message.channel.createOverwrite(message.guild.id, {
            SEND_MESSAGES: null
          }).then(message.channel.send('Lockdown lifted, enjoy talking while you still can')).catch(console.error);
          delete client.lockit[message.channel.id];
        }, ms(time));

      }).catch(error => {
        console.log(error);
      });
    });
  }
  }