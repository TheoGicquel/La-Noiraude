/**
 * @file raz.js
 * @exports `!raz`
 * @fileoverview Commande de remise à zéro de l'enclos
 * @author Theo Gicquel <theo.gicquel.work@gmail.com>
 */
 let noiraude = require('../libs/noiraude');

module.exports = {
    execute(message,args){
        noiraude.enclos={};
        return message.channel.send("Enclos effacé !");
    },
    name: "raz",
};