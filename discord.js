const Discord = require("discord.js");
const helpers = require('./helpers');
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();
const client7 = new Discord.Client();
const client8 = new Discord.Client();
const client9 = new Discord.Client();
const client10 = new Discord.Client();
const client11 = new Discord.Client();
const client69 = new Discord.Client();
const client691 = new Discord.Client();

let token = "token";
let token2 = "token";
let token3 = "token";
let token4 = "token";
let token5 = "token";
let token6 = "token";
let token7 = "token";
let token8 = "token";
let token9 = "token";
let token10 = "token";
let token11 = "token";
let token69 = "token";
let token691 = "token";

let channeid = "channelid";
let channeid2 = "channelid";
let channeid3 = "channelid";
let channeid4 = "channelid";
let channeid5 = "channelid";
let channeid6 = "channelid";
let channeid7 = "channelid";
let channeid8 = "channelid";
let channeid9 = "channelid";
let channeid10 = "channelid";
let channeid11 = "channelid";
let channeid69 = "channelid";
let channeid691 = "channelid";

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
client3.on("ready", () => {
    reconnect = false
    console.log(client3.user.tag + " Just logged in!")
    const channelS = client4.channels.cache.find(channel => channel.id == channeid3)
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
client4.on("ready", () => {
    reconnect = false
    console.log(client4.user.tag + " Just logged in!")
    const channelS = client4.channels.cache.find(channel => channel.id == channeid4)
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
client5.on("ready", () => {
    reconnect = false
    console.log(client5.user.tag + " Just logged in!")
    const channelS = client5.channels.cache.find(channel => channel.id == channeid5)
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
client6.on("ready", () => {
    reconnect = false
    console.log(client6.user.tag + " Just logged in!")
    const channelS = client6.channels.cache.find(channel => channel.id == channeid6)
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
client7.on("ready", () => {
    reconnect = false
    console.log(client7.user.tag + " Just logged in!")
    const channelS = client7.channels.cache.find(channel => channel.id == channeid7)
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
client8.on("ready", () => {
    reconnect = false
    console.log(client8.user.tag + " Just logged in!")
    const channelS = client8.channels.cache.find(channel => channel.id == channeid8)
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
client9.on("ready", () => {
    reconnect = false
    console.log(client9.user.tag + " Just logged in!")
    const channelS = client9.channels.cache.find(channel => channel.id == channeid9)
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
client10.on("ready", () => {
    reconnect = false
    console.log(client10.user.tag + " Just logged in!")
    const channelS = client.channels.cache.find(channel => channel.id == channeid10)
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
client11.on("ready", () => {
    reconnect = false
    console.log(client11.user.tag + " Just logged in!")
    updateStatus();
    const channelS = client11.channels.cache.find(channel => channel.id == channeid11)
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
client69.on("ready", () => {
    reconnect = false
    console.log(client69.user.tag + " Just logged in!")
    const channelS = client69.channels.cache.find(channel => channel.id == channeid69)
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
client691.on("ready", () => {
    reconnect = false
    console.log(client691.user.tag + " Just logged in!")
    const channelS = client691.channels.cache.find(channel => channel.id == channeid691)
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
client.login(token).catch(e => console.log(e.message));
client2.login(token2).catch(e => console.log(e.message));
client3.login(token3).catch(e => console.log(e.message));
client4.login(token4).catch(e => console.log(e.message));
client5.login(token5).catch(e => console.log(e.message));
client6.login(token6).catch(e => console.log(e.message));
client7.login(token7).catch(e => console.log(e.message));
client8.login(token8).catch(e => console.log(e.message));
client9.login(token9).catch(e => console.log(e.message));
client10.login(token10).catch(e => console.log(e.message));
client11.login(token11).catch(e => console.log(e.message));
client69.login(token69).catch(e => console.log(e.message));
client691.login(token691).catch(e => console.log(e.message));
