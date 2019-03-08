const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    const role = message.guild.roles.size;
    const online = (message.guild.members.filter(m => m.presence.status != 'offline').size - message.guild.members.filter(m=>m.user.bot).size)
    let embed = new Discord.RichEmbed()
    .setAuthor("Serveur: " + message.guild.name, message.guild.iconURL)
    .setColor("#15f153")
    .addField('Membres', `${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size}`, true)
    .addField('En ligne', `${online}`, true)
    .addField("Bots", message.guild.members.filter(m=>m.user.bot).size)
	.setFooter(`Demandé par ${message.author.username}`)
    .setTimestamp()
    message.channel.send(embed);
	message.delete().catch();
}

module.exports.help = {
    name:"member"
}