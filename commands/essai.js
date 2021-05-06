/**
 * @file essai.js
 * @usage `!essai nombre`
 * @fileoverview Commande de remplissage de l'enclos avec les jeux de tests
 *  prédéterminés
 * @author Theo Gicquel <theo.gicquel.work@gmail.com>
 */
 let vache = require('../libs/vacheAPIs.js');
 let mathAPI = require('../libs/mathAPI.js');
 let noiraude = require('../libs/noiraude');
 let io = require('../libs/io');
 let saisieHelpText="Format :\n `!saisie x,y:x,y etc...`"
 let jeu;
 let listeEssai="(liste)"
 module.exports = {
     execute(message,args){
         if(!args.length){
             message.channel.send("Il faut Saisir un jeu d'essai parmi les suivants avec !essai ```n°```: ");
             return message.channel.send(listeEssai);
         }else
         {
         switch (parseInt(args[0])){
            case 1:
                 jeu="-1,1:-1,-1:1,-1:1, 1";
                 break;
            case 2:
                    jeu="-16.6,-20.1:-12.6,-18.6:-11.6,-16.6:-15.1,-15.1";
                    break;
            case 3:
                    jeu="-1.1,-1.5:2.1,3.012:5.6,-1.21:1.97,4.07";
                    break;
             default:
                 return message.channel.send("erreur de saisie");
                 break;
         }
         message.channel.send(jeu)
         message.channel.send("intégration de l'enclos...");
         noiraude.enclos=io.saisieParser(jeu);
         message.channel.send("`!lancement` pour lancer les calculs");
         message.channel.send("`!etat` pour visualiser l'enclos");
        }
     },
     name: "essai",
 };