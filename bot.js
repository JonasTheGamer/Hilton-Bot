         
var prefix = '!';
const Discord = require('discord.js');
const client = new Discord.Client();
          
function isCommand(command, message){
	var command = command.toLowerCase();
	var content = message.content.toLowerCase();
	return content.startsWith(prefix + command);
}
client.on('ready', () => {
  client.user.setGame('GAME HERE')
})
console.log("I'm here!")
client.on('message', (message) => {
	console.log(message.content)
	if (message.author.bot) return; // Dont answer yourself.
	var args = message.content.split(/[ ]+/)
    
	if(isCommand('Ping', message)){
		message.reply('LOL');
	}
});
client.login(process.env.BOT_TOKEN);
