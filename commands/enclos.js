let vache = require('../libs/vacheAPIs.js');
let mathAPI = require('../libs/mathAPI.js');
let noiraude = require('../libs/noiraude');
module.exports = {
    execute(message,args){
        if (args.length != 3) {
            return message.channel.send(
                `Nombre d'arguments incorrects !, ${args.length} au lieu de 3`);
        }
        else
        {
            let operation = args[0];
            let pointX=  parseFloat(args[1]);
            let pointY = parseFloat(args[2]);
            if(isNaN(pointX)||isNaN(pointY)){
                return message.channel.send("erreur de formatage");
            };

            switch (operation) {
                case "a":
                    noiraude.pushEnclos(mathAPI.pointConstructor(pointX,pointY));
                    message.channel.send("ajout effectué!");
                    break;

                case "r":
                    return message.channel.send("retirer");
                    break;
                default:
                    return message.channel.send(
                    "j'ai mal saisi votre premier argument, faites `!aide`");
                    break;
            }
        }

        message.channel.send(JSON.stringify(noiraude.enclos));
        return message.channel.send("done !");

    },
    name: "enclos",
};