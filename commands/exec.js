/**
 * @file lancement.js
 * @usage `!lancement`
 * @fileoverview lance les différents calculs afin d'afficher le centre de
 * gravité de l'enclos
 * @author Theo Gicquel <theo.gicquel.work@gmail.com>
 */

/** requisistion des modules nécessaires */
let mathAPI = require('../libs/mathAPI.js');
let noiraude = require('../libs/noiraude');
let io = require('../libs/io');

/** Exportation du module local en commande appellée via son attribut `name`*/
module.exports = {
    execute(message,args){
        /** Contrôle du nombre d'arguments */
        if(noiraude.enclos.length<3){
            return message.reply("Définissez l'enclos d'abord !");
        }

        /** Message invitant l'utilisateur a attendre les résultats */
        message.channel.send("Calcul en cours...");

        /** Calcul de l'aire a partir de l'enclos  */        
        let aire = mathAPI.getAirePolygone(noiraude.enclos);

        /** Calcul du centre de gravité à partir de l'aire et de l'enclos  */        
        let centreGravite = mathAPI.getCentreGravite(
            noiraude.enclos,aire
        );

        /** Calcul de l'appartennance du gravité à l'enclos */        
        let appartenance = mathAPI.getAppartenancePointPolygone(
            noiraude.enclos,centreGravite
        );

        /** Affichage des résultats des calculs */
        message.channel.send("aire obtenue : " + aire);
        message.channel.send(
            "centre de gravité  : " + io.jsonPrettifier(centreGravite)
        );
        message.channel.send("Valeur appartenance :");
        message.channel.send("**" + appartenance + "**");
        return message.channel.send("calculs terminés !");
    },
    name: "lancement",
};