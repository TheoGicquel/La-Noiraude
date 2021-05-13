/**
 * @file hello.js
 * @usage `!hello`
 * @fileoverview Affichage d'un message de salutation aléatoire
 * @author Julien Mocquet
 */

/**
 * Tableau de chaîne de caractères de messages d'accueil
 * @type {Array}
 * @const
 */
const listHello = [ 
    'Hello les Loulous',
    'Bonjour les amis',
    "Allo Docteur ici la Noiraude",
];

/** Exportation du module local en commande appellée via son attribut `name`*/
module.exports = {
    execute(message,args){ 
        /**
         * Tirage d'un message aléatoire
         * `Math.floor` - suppression décimale
         * `Math.random` Tirage aléatoire dans l'intervalle ]0;1[
         */
        message.channel.send(
            `${listHello[Math.floor(Math.random() * listHello.length)]}`);
    },
    name: "hello",
};