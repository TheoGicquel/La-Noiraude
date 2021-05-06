/**
 * @file info.js
 * @fileoverview Affichage des infos sur la réalisation du robot
 * @author Theo Gicquel 
 */

/** Message à afficher */
const info = `
    **La noiraude** est un robot discord de calcul de centre de gravité réalisé par:
    - Théo Gicquel https://gitlab.com/TheoGicquel
    - Julien Mocquet https://gitlab.com/jujugibus

    Réalisé du 02 Avril 2021 au 15 Mai 2021
    Le code source de ce projet est consultable sur https://gitlab.com/TheoGicquel/la-noiraude-bot

`;

/** exportation de la commande */
module.exports = {
    execute(message,args){
        message.channel.send(info);
    },
    name: "info",
};