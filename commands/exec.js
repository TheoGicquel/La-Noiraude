let vache = require('../libs/vacheAPIs.js');
let mathAPI = require('../libs/mathAPI.js');
let noiraude = require('../libs/noiraude');
let io = require('../libs/io');

const sentSignal = "Calcul en cours..."

module.exports = {
    execute(message,args){
        if(noiraude.enclos.length<3){
            return message.reply("Définissez l'enclos d'abord !");
        }
        message.channel.send(sentSignal);
        let aire = mathAPI.getAirePolygone(noiraude.enclos);
        let centreGravite = mathAPI.getCentreGravite(noiraude.enclos,aire);
        //FIXME Valeur d'appartennance non valide
        let appartenance = mathAPI.getAppartenancePointPolygone(noiraude.enclos,centreGravite);

        message.channel.send("aire obtenue : " + aire);
        message.channel.send("centre de gravité  : " +  io.jsonPrettifier(centreGravite));
        message.channel.send("Valeur appartenance :");
        message.channel.send("**" + appartenance + "**");

        return message.channel.send("calculs terminés !");

    },
    name: "lancement",
};