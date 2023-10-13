const Discord = require("discord.js");
const helpers = require('./helpers');
const client = new Discord.Client();
const client2 = new Discord.Client();


let token = "token";
let token2 = "token";


let channeid = "channelid";
let channeid2 = "channelid";


let spammed = 0;
let reconnect = false;

function random() {
    return Math.floor(Math.random() * 1) + 15
}

function junk(length) {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
function updateStatus() {
  const currentTime = new Date();
  const uptime = currentTime - client.readyAt;
  
  const days = Math.floor(uptime / 86400000);
  const hours = Math.floor(uptime / 3600000);
  const minutes = Math.floor((uptime % 3600000) / 60000);
  const seconds = Math.floor((uptime % 60000) / 1000);

  const statusString = `${days} hari, ${hours} jam, ${minutes} menit, ${seconds} detik`;

  client.user.setPresence({ activity: { name: statusString, type: 'WATCHING' }, status: 'online' })
    .then(console.log)
    .catch(console.error);

  // Mengubah status setiap 10 menit (600000 milidetik)
  setTimeout(updateStatus, 10000 );
}

client.on("ready", () => {
    reconnect = false
    console.log(client.user.tag + " Just logged in!")
    updateStatus();
    const channelS = client.channels.cache.find(channel => channel.id == channeid)
    const spammer = setInterval(() => {
        const repeat = random()
        let texttospam = '';
        for (let i = 0; i < repeat; i++) {
            texttospam = 'ss ' + junk(repeat)
        }
        channelS.send(texttospam)
        spammed++
        console.log(`Dab! successfully ${spammed} messages`)
    }, helpers.getRandomInt(40000,300000,540000,600000,660000,720000));
})
client2.on("ready", () => {
    reconnect = false
    console.log(client2.user.tag + " Just logged in!")
    const channelS = client2.channels.cache.find(channel => channel.id == channeid2)
    const spammer = setInterval(() => {
        const repeat = random()
        let texttospam = '';
        for (let i = 0; i < repeat; i++) {
            texttospam = 'ss ' + junk(repeat)
        }
        channelS.send(texttospam)
        spammed++
        console.log(`Dab! successfully  ${spammed} messages`)
    }, helpers.getRandomInt(40000,300000,540000,600000,660000,720000));
})

client.login(token).catch(e => console.log(e.message));
client2.login(token2).catch(e => console.log(e.message));
