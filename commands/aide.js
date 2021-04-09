/**
 * @file Commande d'affichage des commandes disponibles
 * @author Theo Gicquel 
 */

/** Message à afficher */
const aideMessage = `
\`!aide\`\t affiche cette commande
\`!Hello\`\t dire bonjour
\`!dance\`\t ???
`;

/** exportation de la commande */
module.exports = {
    execute(message,args){
        message.channel.send(aideMessage);
    },
    name: "aide",
};