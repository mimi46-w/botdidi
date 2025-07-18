require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once('ready', () => {
  console.log('Bot en ligne !');
});

client.on('messageCreate', message => {
  if(message.content === '!ping') {
    message.channel.send('Pong!');
  }
});

client.login(process.env.TOKEN);
