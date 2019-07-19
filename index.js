// code taken from my mcdiscordchat repo.
const config = require("./config.json");
var mineflayer = require('mineflayer');
var bot = mineflayer.createBot({
  host: "mc.minehut.com", // Server IP for bot to connect to
  port: "25565",       // server port for bot to connect to
  username: config.username, // email for bot
  password: config.password,          // password for bot
  version: config.version, // version of server bot is trying to connect to
});
bot.on('login', () => {
  console.log(`Minecraft bot is ready!`);
    setInterval(function(){ bot.chat(config.loopmessage); }, config.interval_for_message_in_milliseconds); // 1,800,000 for 30 mins

});
bot.on('message', msg => { 
  console.log(msg.toString())
    });
function bindEvents(bot) {

  bot.on('error', function(err) {
      console.log('Error attempting to reconnect: ' + err.errno + '.');
      process.exit(1)
      if (err.code == undefined) {
          console.log('Invalid credentials OR bot needs to wait because it relogged too quickly.');
      }
  });
}
bot.on('kicked', function(reason) {
  console.log("I got kicked for", reason, "lol");
  });

  bot.on('end', function() {
    console.log("Bot has ended");
    process.exit(1)
});
bot.on('error', err => console.log(err));
