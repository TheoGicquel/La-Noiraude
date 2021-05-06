let noiraude = require('../libs/noiraude');
let io = require('../libs/io')
module.exports = {
    execute(message,args){
        message.channel.send(io.jsonPrettifier(noiraude.enclos));
    },
    name: "etat",
};

