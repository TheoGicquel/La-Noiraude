/**
 * @file saisie.js
 * @usage `!saisie`
 * @fileoverview Commande de saisie de multiples piquets via une seule commande
 * @author Theo Gicquel <theo.gicquel.work@gmail.com>
 */

/** requisistion des modules nécessaires */
let noiraude = require('../libs/noiraude');
let io = require('../libs/io');
let saisieHelpText="Format :\n `!saisie x,y:x,y etc...`"
let validation;

/** Exportation du module local en commande appellée via son attribut `name`*/
module.exports = {
    execute(message,args){
        switch (args.length) {
            case 1:
                validation = io.saisieValidation(args[0]);
                switch (validation) {
                    case true:
                        noiraude.enclos=io.saisieParser(args[0]);
                        return message.channel.send(":white_check_mark: Saisie effectuée !\n" + io.jsonPrettifier(noiraude.enclos)); 
                    case false:
                        return message.channel.send(":x: Saisie invalide !");
                    default:
                        return message.channel.send(":thinking: Problème de saisie innatendu");
                }
            default:
                message.channel.send(
                    `Nombre d'arguments incorrects !  ${args.length} au lieu de 2`);
                    return message.channel.send(saisieHelpText);
        }
    },
    name: "saisie",
};