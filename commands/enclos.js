const { vacheEnclos } = require("../libs/vacheAPIs");

let debugstring = "this is a debug string";

module.exports = {
    execute(message,args){
        if (!args.length) {
            return message.channel.send(
                `Aucun argument saisi !, ${message.author}!`);
        }
        else switch (args[0]) {
            case "a":
                return message.channel.send("ajouter");
                break;
            case "r":
                return message.channel.send("retirer");
            case "raz":
                return message.channel.send("remise a zéro !");

            default:
                return message.channel.send(
                    "j'ai mal saisi votre premier argument, faites `!aide`");
                break;
        }
    },
    name: "enclos",
};