const Discord = require("discord.js");
const errors = require("../utils/errors.js");
const ms = require('ms')
const moment = require("moment");
require("moment-duration-format");


module.exports.run = async (bot, message, args) => {
  const duration = moment.duration(bot.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
  let time = args[0]
  let raison = args.slice(1).join(" ")
  message.delete().catch();
  let embed = new Discord.RichEmbed()
  .setTitle(":date: Rappel")
  .addField("Rappel demandé:", raison)
  .addField("Dans:", time)
  .setColor("#7FC6BC")
  .setFooter(`Rappel crée par ${message.author.username}`)
  .setTimestamp()

  try {
    message.author.send({embed: embed})
  }catch(e) {
    message.channel.send({embed: embed})}

    setTimeout(() => {
      let embed = new Discord.RichEmbed()
      .setTitle(":date: Rappel")
      .setDescription(`<@${message.author.id}>`)
      .addField("Rappel demandé:", raison)
      .addField("Il y a:", time)
      .setColor("#7FC6BC")
      .setFooter(`Rappel crée par ${message.author.username}`)
      try {
        message.author.send({embed: embed})
      }catch(e) {
        message.channel.send({embed: embed})}
      }, ms(time))
  }

module.exports.help = {
  name: "rappel"
}