/**
 * @file hello.js
 * @usage `!hello`
 * @fileoverview Affiche un message de salutation aléatoire
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
        //FIXME @jujugibus Julien mocquet : longueur ligne !
        message.channel.send(`${listHello[Math.floor(Math.random() * listHello.length)]}`); //floor retire la décimal // Math.random = un chiffre entre 0 et 1 (exclus)
    },
    name: "hello",
};