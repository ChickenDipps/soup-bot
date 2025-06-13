const { SlashCommandBuilder } = require('discord.js');
const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('quote-add')
    .setDescription('Add a quote to the database')
    .addStringOption(option =>
      option.setName('quote')
        .setDescription('The quote to add')
        .setRequired(true))
    .addUserOption(option =>
      option.setName('author')
        .setDescription('The author of the quote')
        .setRequired(true)),
  async execute(interaction) {
    const quote = interaction.options.getString('quote');
    const author = interaction.options.getUser('author');
    const authorId = author.id;
    const serverId = interaction.guild.id;

    const db = await open({
      filename: 'db.sqlite',
      driver: sqlite3.Database,
    });

    await db.run('INSERT OR REPLACE INTO User (id, username) VALUES (?, ?)', [authorId, author.username]);
    await db.run('INSERT INTO Quote (message, userID, serverID, datetime) VALUES (?, ?, ?, ?)', [quote, author.id, serverId, new Date().toISOString()]);
    await interaction.reply(`Quote added: "${quote}" by ${author.username}`);
  },
};
