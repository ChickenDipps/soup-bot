const { Events } = require('discord.js');
const { open } = require('sqlite');
const sqlite3 = require('sqlite3').verbose();

module.exports = {
  name: Events.ClientReady,
  once: true,
  async execute(client) {
    console.log(`Ready! Logged in as ${client.user.tag}`);
    const db = await open({
      filename: 'db.sqlite',
      driver: sqlite3.Database,
    });
    client.guilds.cache.forEach(async guild => {
      await db.run('INSERT OR IGNORE INTO Server (ID, name) VALUES (?, ?)', [guild.id, guild.name]);
    });
    await db.close();
  },
};
