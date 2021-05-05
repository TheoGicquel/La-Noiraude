let vache = require('../libs/vacheAPIs.js');
let mathAPI = require('../libs/mathAPI.js');
let noiraude = require('../libs/noiraude');
const sentSignal = "Lancement"

module.exports = {
    execute(message,args){
        if(noiraude.enclos.length<3){
            return message.reply("Définissez l'enclos d'abord !");
        }
        message.channel.send(noiraude.enclos.length);
        message.channel.send(sentSignal);
        let aire = mathAPI.getAirePolygone(noiraude.enclos);
        message.channel.send("aire obtenue : " + aire);
        
        /*
        let centreGravite = mathAPI.getCentreGravite(noiraude.enclos);
        message.channel.send("centre de gravité  : " + centreGravite);
        */

        return message.channel.send("done !");

    },
    name: "lancement",
};