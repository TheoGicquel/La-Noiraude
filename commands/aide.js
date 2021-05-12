/**
 * @file aide.js
 * @usage `!aide`
 * @fileoverview Commande d'affichage des commandes disponibles
 * @author Theo Gicquel <theo.gicquel.work@gmail.com>
 */

/**
 * Chaîne de caractères brute d'aide afficher (retours a la ligne inclus)
 * @type {String}
 * @const
 */
const aideMessage = `
(réalisé par Théo Gicquel & Julien mocquet)
** Commandes de base **
\`!aide\`\t Affichage de la liste de toutes les commandes


\`!etat\`\t afficher les piquets de l'enclos
\`!enclos\`\t modifier précisément l'enclos 
\`!saisie\`\t saisir un ensemble de piquets de l'enclos simultanément

\`!lancement\`\t déterminer si la vache se trouve dans le pré

** Informations & Cosmétique **
\`!info\`\t voir les informations sur ce robot
\`!hello\`\t dire bonjour
\`!dance\`\t ???
`;

/** Exportation du module local en commande appellée via son attribut `name`*/
module.exports = {
    execute(message,args){
        message.channel.send(aideMessage);
    },
    name: "aide",
};