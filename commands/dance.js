var danceUrl = "https://tenor.com/view/polish-dancing-cow-dancing-cow-polish-gif-18921101";
module.exports = {
    execute(message,args){
        message.channel.send(danceUrl);
    },
    name: "dance",
};
