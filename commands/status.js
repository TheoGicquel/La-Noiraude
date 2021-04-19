module.exports = {
    execute(message,args){
        for(let i=0;i<enclosVache.length;i++){
            message.channel.send(global.enclosVache[i]);
        }
        
    },
    name: "etat",
};

