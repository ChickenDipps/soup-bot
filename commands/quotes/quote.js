const { SlashCommandBuilder } = require('discord.js');
const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('quote')
    .setDescription('Get a random quote from the database'),
  async execute(interaction) {
    const serverId = interaction.guild.id;

    const db = await open({
      filename: 'db.sqlite',
      driver: sqlite3.Database,
    });

    const quote = await db.get('SELECT quote.ID, quote.message, quote.userID, user.username FROM Quote JOIN User ON Quote.userID = User.id WHERE serverID = ? ORDER BY RANDOM() LIMIT 1', [serverId]);
    console.log(quote);
    if (quote) {
      await interaction.reply(`"${quote.message}" - ${quote.username}`);
    } else {
      await interaction.reply('No quotes found for this server.');
    }
  },
};
