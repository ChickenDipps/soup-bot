# Setup
- Create a [discord app](https://discord.com/developers/applications) and under `OAuth2` give the scopes `applications.commands` and `bot`, copy the link provided and add to a server
- The bots token can be found in the `Bot` menu, the client (application) ID can be found under `General Information`
- The server (Guild) ID can be found by right clicking a server and pressing `Copy ID` while developer mode is enabled
- Create a `.env` file as set out as below
```
TOKEN="bot token goes here"
CLIENT_ID="bot client id goes here"
GUILD_ID="server id goes here"
```
- Run `node deploy-commands-local.js` to only add the commands to the server specified in `.env` OR `node deploy-commands-global.js` to deploy the commands in every server the bot is in
- Run `node index.js` to start the bot 