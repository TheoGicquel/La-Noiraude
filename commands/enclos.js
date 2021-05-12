/**
 * @file enclos.js
 * @usage `!essai nombre`
 * @fileoverview commande de modification
 * @author Theo Gicquel <theo.gicquel.work@gmail.com>
 */

/** requisistion des modules nécessaires */
let mathAPI = require('../libs/mathAPI.js');
let noiraude = require('../libs/noiraude');

/** Exportation du module local en commande appellée via son attribut `name`*/
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
                    let point=mathAPI.pointConstructor(pointX,pointY);
                    noiraude.enclos.push(point); 
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