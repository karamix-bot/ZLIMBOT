const Discord = require("discord.js");
const snekfetch = require('snekfetch')
const api = "https://api.whatdoestrumpthink.com/api/v1/quotes/random"

module.exports.run = async (bot, message, args) => {
    snekfetch.get(api).then(r => {
        let embed = new Discord.RichEmbed()
        .setTitle(`Trump quote`)
        .setColor("#F7BA2A")
        .setThumbnail("https://i.imgur.com/osQQMqc.png")
        .setDescription(r.body.message)
        .setFooter(`DemandĂ© par ${message.author.username}`)
        .setTimestamp()
        message.channel.send({embed: embed});
        message.delete().catch();
    })
}

module.exports.help = {
    name: "trump",
}    