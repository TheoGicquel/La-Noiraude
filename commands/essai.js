/**
* @file essai.js
* @usage `!essai (1-4)`
* @fileoverview Commande de remplissage de l'enclos avec les jeux de tests
*  prédéterminés
* @author Theo Gicquel <theo.gicquel.work@gmail.com>
*/

/** requisistion des modules nécessaires */
let noiraude = require('../libs/noiraude');
let io = require('../libs/io');

/** définition des variables et constantes nécessaires */
let jeu;
let aideEssai=`Veuillez saisir une préconfiguration d'enclos parmis les 
suivantes avec \`!essai <numéro>\` `
let centreAttendu;
let presenceAttendue;
let aireAttendue;

/**
 * Message de présentation des jeux d'essais disponibles
 * @type {String}
 * @const
 */
const listeEssai=`
	\`1\` (-1 , 1) (-1 , -1) (1 , -1) (1 , 1) \n
	\`2\`(-16.6 ,-20.1 ) (-12.6 , -18.6) (-11.6 , -16.6) (-15.1 , -15.1 ) \n
	\`3\`(-1.1 , -1.5 ) (2.1 , 3.012 ) (5.6 , -1.21) (1.97 , 4.07) \n
	\`3\`(-1.1 , -1.5 ) (2.1 , 3.012 ) (5.6 , -1.21) (1.97 , 4.07) \n
`

module.exports = {
    execute(message,args){
        if(!args.length)
        {
			message.channel.send(aideEssai);
			return message.channel.send(listeEssai);
		}
        else
	    {
	        switch (parseInt(args[0])){
	            case 1:
		            jeu="-1,1:-1,-1:1,-1:1,1";
		            aireAttendue="4";
		            centreAttendu="(0,0)";
		            presenceAttendue="Intérieur";
		            break;
	            case 2:
		            jeu="-16.6,-20.1:-12.6,-18.6:-11.6,-16.6:-15.1,-15.1";
		            aireAttendue="13.125";
		            centreAttendu="(-14.226, -17.555)";
		            presenceAttendue="Intérieur";
		            break;

	            case 3:
		            jeu="-1.1,-1.5:2.1,3.012:5.6,-1.21:1.97,4.07";
		            aireAttendue="3.563";
		            centreAttendu="(1.978, 1.903)";
		            presenceAttendue="Extérieur";
		            break;
	            case 4:
		            jeu="26,0:8,10:10,11:6,15:3,22:1,27:3,29:12,25:17,20:18,22:24,20:33,18:39,8:44,0:44,-8:44,-18:39,-20:33,-22:24,-20:18,-25:17,-29:12,-27:3,-22:1,-15,3:-11,6:-10,10"
		            aireAttendue=undefined;
		            centreAttendu=undefined;
		            presenceAttendue=undefined;
		            break;

	            default:
		            return message.channel.send("erreur de saisie");
	        }
	        message.channel.send(jeu)
	        message.channel.send("intégration de l'enclos...");
	        noiraude.enclos=io.saisieParser(jeu);
	        message.channel.send("aire attendue: "+ aireAttendue);
	        message.channel.send("centre de gravité attendu: "+ centreAttendu);
	        message.channel.send("présence de vache attendue: "+ presenceAttendue);
	        message.channel.send("** Remplissage terminé ! **");
	        message.channel.send("`!lancement` pour lancer les calculs");
	        message.channel.send("`!etat` pour visualiser l'enclos");
	    }
    },
    name: "essai",
};