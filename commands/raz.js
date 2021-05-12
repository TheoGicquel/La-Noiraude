/**
 * @file raz.js
 * @exports `!raz`
 * @fileoverview Commande de remise à zéro de l'enclos
 * @author Theo Gicquel <theo.gicquel.work@gmail.com>
 */

/** requisistion du module de l'enclos */
let noiraude = require('../libs/noiraude');

/** Exportation du module local en commande appellée via son attribut `name`*/
module.exports = {
    execute(message,args){
        noiraude.enclos={};
        return message.channel.send("Enclos effacé !");
    },
    name: "raz",
};