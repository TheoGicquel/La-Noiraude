const vacheAPIs = require("../libs/vacheAPIs");


module.exports = {
    execute(message,args){
        if (args.length != 2) {
            return message.channel.send(
                `Nombre d'arguments incorrects !, ${args.length} au lieu de 2`);
        }
        else switch (args[0]) {
            case "a":
                //return message.channel.send("ajouter");
               // vacheAPIs.ajoutPiquet(,args[1]);
                break;

            case "r":
                return message.channel.send("retirer");
                break;

            default:
                return message.channel.send(
                    "j'ai mal saisi votre premier argument, faites `!aide`");
                break;
        }
    },
    name: "enclos",
};