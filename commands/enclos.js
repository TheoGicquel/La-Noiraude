let debugstring = "this is a debug string";

module.exports = {
    execute(message,args){
            if(args == "ajout"){
                message.channel.send("ajout de piquet ");
            }
            if(args == "retirer"){
                message.channel.send("retirer piquet ");
            }
            if(args == "raz"){
                message.channel.send("remise a zero ");
            }
    },
    name: "enclos",
};