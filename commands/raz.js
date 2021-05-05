/**
 * @file raz.js
 * @exports `!raz`
 * @fileoverview Commande de remise à zéro de l'enclos
 * @author Theo Gicquel <theo.gicquel.work@gmail.com>
 */

module.exports = {
    execute(message,args){
        global.enclosVache={};
        message.channel.send(JSON.stringify(global.enclosVache));
        return message.channel.send("Enclos effacé !");
    },
    name: "raz",
};