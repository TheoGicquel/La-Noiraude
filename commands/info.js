/**
 * @file info.js
 * @usage `!info`
 * @fileoverview Affiche les informations sur le projet
 * @author Theo Gicquel <theo.gicquel.work@gmail.com>
 */

/**
 * Chaîne de caractères brute des informations sur le projet
 * @type {String}
 * @const
 */
const info = `
    **La noiraude** est un robot discord de calcul de centre de gravité réalisé par:
    - Théo Gicquel https://gitlab.com/TheoGicquel
    - Julien Mocquet https://gitlab.com/jujugibus

    Réalisé du 02 Avril 2021 au 15 Mai 2021
    Le code source de ce projet est consultable sur https://gitlab.com/TheoGicquel/la-noiraude-bot
    version : ** release v2.0 - Vieux Lille :cheese: **
`;

/** Exportation du module local en commande appellée via son attribut `name`*/
module.exports = {
    execute(message,args){
        message.channel.send(info);
    },
    name: "info",
};