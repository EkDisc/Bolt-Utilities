const Discord = require("discord.js");

module.exports = {
  name: "invite",
  description: "Get the bot's",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    let embed = new Discord.MessageEmbed()
      .setTitle("Invite Me")
      .setColor("RANDOM")
      .setDescription(
        "**Get the Invite Link [Server Link] (https://discord.gg/2SfcKxNt4G)**"
      )
      .setFooter(`Requested By: ${message.author.username}`);
    message.channel.send({ embeds: [embed] });
  },
};
