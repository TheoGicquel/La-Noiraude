module.exports = {
    execute(message,args){
        console.log(global.enclosVache);
        message.channel.send(JSON.stringify(global.enclosVache));
        /*
        for(let i=0;i<enclosVache.length;i++){
            
            message.channel.send(global.enclosVache[i]);
        }
        */
        
    },
    name: "etat",
};

