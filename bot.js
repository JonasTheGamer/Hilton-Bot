 // setup        
var prefix = '!';
var discord = require('discord.js');
var roblox = require('roblox-js');
var request = require("request");
var client = new discord.Client();

//Login into roblox, but not needed for this bot
roblox.login({username: "marketmanager1", password: "Digitaalsloefje20Nummerke5"}).then((success) => {
}).catch(() => {console.log("Sorry, it failed.");}); 

function isCommand(command, message){
	var command = command.toLowerCase();
	var content = message.content.toLowerCase();
	return content.startsWith(prefix + command);
}

var started = true
client.on('message', (message) => {
	if (message.author.bot) return; // Dont answer yourself.
    var args = message.content.split(/[ ]+/)
    
    if (isCommand('stopbot',message)){
        message.channel.send('Bye!')
        process.exit()
    }
    if (isCommand('getmessages',message)){
        roblox.getMessages(1, 1).then(function (inbox) {
            message.reply(inbox.messages[0]);
        });
    }
    if (isCommand('cp',message)){
        var ppname = args[1]
        var reply = "not found"
        
        var st1 = "https://api.roblox.com/users/get-by-username?username="
        var ul =  st1.concat(ppname)
        request(ul, function(error, response, body) {
            if (body == '{"success":false,"errorMessage":"User not found"}') {
                message.channel.send("User not found!")
            }else{
                var st1 = "Here are the gamepasses for "
                var reply = st1.concat(ppname)
                message.channel.send(reply)
                var arr = JSON.parse(body);
                var Id = arr.Id;

                // SUITE LANE CHECK

                var st1 = "https://api.roblox.com/Ownership/HasAsset?userId="
                var st2 = "&assetId=414378603"
                var rmsg = st1.concat(Id)
                rmsg  = rmsg.concat(st2)
                request(rmsg, function(error, response, body) {
                    if (body == "true"){
                        var t1 = "Suite gamepass:     "
                        var rep = t1.concat(" :white_check_mark:  ")
                        message.channel.send(rep)
                    } else {
                        var t1 = "Suite gamepass:     "
                        var rep = t1.concat(" :x:  ")
                        message.channel.send(rep) 
                    }
                });

                var st1 = "https://api.roblox.com/Ownership/HasAsset?userId="
                var st2 = "&assetId=414376392"
                var rmsg = st1.concat(Id)
                rmsg  = rmsg.concat(st2)
                //FAST LANE CHECK 

                request(rmsg, function(error, response, body) {
                    if (body == "true"){
                        var t1 = "Fast Lane gamepass: "
                        var rep = t1.concat(" :white_check_mark:  ")
                        message.channel.send(rep)
                    } else {
                        var t1 = "Fast Lane gamepass: "
                        var rep = t1.concat(" :x:  ")
                        message.channel.send(rep) 
                    }
                });
            }

        });       
        
    }
    
});

client.login(process.env.BOT_TOKEN);
