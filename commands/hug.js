const { MessageEmbed } = require("discord.js")
const fetch = require("superagent")

module.exports = {
name: "hug",
description: "hug someone",
run: async (client, message, args) => {

          let user = message.mentions.users.first()
      const fetch = require("superagent");
const { MessageEmbed } = require("discord.js");
if(!user) return message.channel.send({embed: {
  description: 
  `
  > Hug Command
  Hug Someone!
  Usage: p-hug <@858665715958808597>
  `,
  color: "RANDOM",
}})

fetch.get("https://some-random-api.ml/animu/hug").then(x => {
    const hug = new MessageEmbed()
    .setDescription(`${message.author} *hugs* ${user}`)
    .setColor("RANDOM")
    .setImage(x.body.link)
    message.channel.send(hug);
});
}
}