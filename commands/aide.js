/**
 * @file aide.js
 * @usage `!aide`
 * @fileoverview Commande d'affichage des commandes disponibles
 * @author Theo Gicquel
 * @author Julien Mocquet 
 */

/** Message à afficher */
const aideMessage = `
(Réalisé par Théo Gicquel & Julien Mocquet)
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

/** exportation de la commande + affichage du message */
module.exports = {
    execute(message,args){
        message.channel.send(aideMessage);
    },
    name: "aide",
};