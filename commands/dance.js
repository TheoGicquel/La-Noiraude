/**
 * @file dance.js
 * @usage `!dance`
 * @fileoverview Commande affichant d'un gif animé
 * @author Theo Gicquel <theo.gicquel.work@gmail.com>
 */

/**
 * Chaîne de caractères de l'url du gif
 * @type {String}
 * @const
 */
var danceUrl = "https://tenor.com/view/polish-dancing-cow-dancing-cow-polish-gif-18921101";

/** Exportation du module local en commande appellée via son attribut `name`*/
module.exports = {
    execute(message,args){
        message.channel.send(danceUrl);
    },
    name: "dance",
};
