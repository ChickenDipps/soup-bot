const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ban')
    .setDescription('Bans a user.')
    .addUserOption(option =>
      option.setName('target')
        .setDescription('The user to ban.')
        .setRequired(true)),
  async execute(interaction) {
    const user = await interaction.options.getUser('target');
    const member = await interaction.guild.members.cache.get(user.id);
    member.ban()
      .then(() => {
        interaction.reply({
          content: `Successfully banned ${user.tag}.`,
          ephemeral: true,
        });
      })
      .catch(error => {
        console.error(error);
        interaction.reply({
          content: `Failed to ban ${user.tag}.`,
          ephemeral: true,
        });
      });
  },
};
