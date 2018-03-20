const Discord = require('discord.js');
const client = new Discord.Client();
var express = require('express');
var app = express();
const { Client } = require('pg');
const client = new Client();

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'Dnew') {
    msg.reply('testing:working');
  }
});

/*
await client.connect()

const res = await client.query('SELECT $1::text as message', ['Hello world!']);
console.log(res.rows[0].message); // Hello world!
await client.end();

const messages = msg => {
  if (msg.content === 'help') {
    msg.reply('pong');
  }
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', messages);

*/

client.login(process.env.token);
