/**
 * @file dance.js
 * @fileoverview Commande d'affichage d'un gif animé
 * @author Theo Gicquel 
 */

/**
 * Chaîne de caractères de l'url du gif
 * @type {String}
 * @const
 */
var danceUrl = "https://tenor.com/view/polish-dancing-cow-dancing-cow-polish-gif-18921101";
module.exports = {
    execute(message,args){
        message.channel.send(danceUrl);
    },
    name: "dance",
};
