# Discord Bot Setup

This guide provides step-by-step instructions on how to set up your Discord bot.

## Prerequisites

Before you begin, ensure you have the following:

- A Discord account
- Node.js installed on your machine

## Setup Instructions

1. **Create a Discord App**
    - Go to the Discord Developer Portal.
    - Click on the `New Application` button.
    - Give your application a name and click `Create`.

2. **Set Up Bot**
    - On the left side of the screen, click on the `Bot` tab.
    - Click on `Add Bot` and confirm by clicking `Yes, do it!`.
    - Under the `TOKEN` section, click `Copy` to copy your bot's token. This is the `bot token` that you'll need later.

3. **Set Up OAuth2**
    - On the left side of the screen, click on the `OAuth2` tab.
    - Under `SCOPES`, select `applications.commands` and `bot`.
    - A URL will be generated under the `SCOPES` box. Copy this URL, open it in a new browser tab, and add the bot to a server.

4. **Find Client ID**
    - On the left side of the screen, click on the `General Information` tab.
    - Here, you can find the `Application ID`. This is the `bot client id` that you'll need later.

5. **Find Server ID**
    - Open Discord and go to the server you want to add the bot to.
    - Make sure Developer Mode is enabled (User Settings -> Appearance -> Developer Mode).
    - Right-click on the server name and click `Copy ID`. This is the `server id` that you'll need later.

6. **Create .env File**
    - In the root directory of your project, create a new file named `.env`.
    - Inside this file, add the following lines:
    ```
    TOKEN="paste your bot token here"
    CLIENT_ID="paste your bot client id here"
    GUILD_ID="paste your server id here"
    ```
    - Replace the placeholders with the respective values you copied earlier.

7. **Deploy Commands**
    - Open a terminal in your project directory.
    - To add the commands to the specific server specified in `.env`, run the command `node deploy-commands-local.js`.
    - Alternatively, to deploy the commands in every server the bot is in, run the command `node deploy-commands-global.js`.

8. **Start the Bot**
    - In the terminal, run the command `node index.js` to start the bot.

Now your Discord bot should be set up and running! 

To test the bot, go to the server you added the bot to and type `/ping` in the chat. The bot should respond with `Pong!`.
