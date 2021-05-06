/**
 * @file saisie.js
 * @usage `!saisie`
 * @fileoverview Commande de saisie de multiples piquets via une seule commande
 * @author Theo Gicquel <theo.gicquel.work@gmail.com>
 */
let vache = require('../libs/vacheAPIs.js');
let mathAPI = require('../libs/mathAPI.js');
let noiraude = require('../libs/noiraude');
let io = require('../libs/io');
let saisieHelpText="Format :\n `!saisie x,y:x,y etc...`"

module.exports = {
    execute(message,args){
        switch (args.length) {
            case 1:
                noiraude.enclos=io.saisieParser(args[0]);
                return message.channel.send("Saisie effectuee ");
                break;
            default:
                message.channel.send(
                    `Nombre d'arguments incorrects !, ${args.length} au lieu de 2`);
                    return message.channel.send(saisieHelpText);
                break;
        }
    },
    name: "saisie",
};