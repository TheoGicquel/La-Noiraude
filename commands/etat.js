/**
 * @file etat.js
 * @usage `!etat`
 * @fileoverview Commande d'affichage du contenu actuel de l'enclos
 * @author Theo Gicquel <theo.gicquel.work@gmail.com>
 */

/** requisistion des modules nécessaires */
let noiraude = require('../libs/noiraude');
let io = require('../libs/io')

/** Exportation du module local en commande appellée via son attribut `name`*/
module.exports = {
    execute(message,args){
        message.channel.send(
            "```" + io.jsonPrettifier(noiraude.enclos) + "```"
        );
    },
    name: "etat",
};

