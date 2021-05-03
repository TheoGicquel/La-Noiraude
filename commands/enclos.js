let vache = require('../libs/vacheAPIs.js');
let mathAPI = require('../libs/mathAPI.js');

module.exports = {
    execute(message,args){
        if (args.length != 3) {
            return message.channel.send(
                `Nombre d'arguments incorrects !, ${args.length} au lieu de 3`);
        }
        else switch (args[0]) {
            case "a":
                //return message.channel.send("ajouter");
                vache.ajoutPiquet(global.enclosVache,args[1],args[2]);
                break;

            case "r":
                return message.channel.send("retirer");
                break;

            default:
                return message.channel.send(
                    "j'ai mal saisi votre premier argument, faites `!aide`");
                break;
        }

        message.channel.send(JSON.stringify(global.enclosVache));
        return message.channel.send("done !");

    },
    name: "enclos",
};