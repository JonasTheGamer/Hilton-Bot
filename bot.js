const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () ==> {
    console.log('I am ready!');          
});
    
client.on('message', (message) ==>{
    if (message.content == 'ping'à {
    message.reply("pong");
    }
});

client.login(process.env.NDE2NzEyNDcyMDE2MzIyNTcx.DbUt_g.DK4GLUA4H2gWGmvW-A9540Dw_Mg)
