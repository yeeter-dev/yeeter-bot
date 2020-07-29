const Discord = require("discord.js");
const discord = require("discord.js");
const client = new Discord.Client
const bot = new Discord.Client
const config = require("./config.json");



//bot status and login
bot.on("ready", () => {

      console.log("Example Text")
     

	 //you can use = client.user.setActivity("Example Text") then the bot is playing the text on online status!
	 
	 //You can use every game you want and every status liken: dnd , online , idle!
      bot.user.setPresence({ game: "Example Game" ,status: "dnd"})

});



//commands
bot.on("message", async message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(config.prefix)) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  //Your commands code here! Like the Example. You can search more commands on the Internet!
  
  if(command === "example") {
	  
	  message.channel.send("Example Text")
	  
  }
  
  
  
  //permission , You can use every discord permissions there are in the server settings. You can make the Permission message every you want.
  
  if(command === "permissionexample") {

const permissionmessage = "You dont have the Permissions for that command!"

        if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply(permissionmessage)
  }


  //You cann add here more commands you like! But dont forgett at the end this [bot.login(config.token);] . Its very important that the bot can login to Discord!
  // Take a look in the example.json file for an example!



});

bot.login(config.token);