# Setup
- Create a `.env` file as set out as below
```
TOKEN="bot token goes here"
CLIENT_ID="bot client id goes here"
GUILD_ID="server id goes here"
```
- Run `node deploy-commands-local.js` to only add the commands to the server specified in `.env` OR `node deploy-commands-global.js` to deploy the commands in every server the bot is in
- Run `node index.js` to start the bot 