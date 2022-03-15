const userInfo = require('./information');

let cowsay = require('cowsay');

console.log(cowsay.say( {
    text : `I'm ${userInfo.name} and my campus is ${userInfo.campus}`,
    e : "oO",
    T : "U",
}));