const Discord = require('discord.js')
bot = new Discord.Client(),

config = require('./config.json') //On appelle le fichier de configuration

bot.login(config.tokenBot) //Connexion au bot avec le token du bot de ./config.json
bot.commands = new Discord.Collection() //Stocké les commandes dans le bot

//Gestion info du bot
bot.once('ready', () => {
    console.info(`${bot.user.tag} launched`);
    bot.user.setActivity("Appeler son médecin");
})

const fs = require("fs") //Module d'accès au fichier (Déjà préinstallé avec Nodejs)

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js')); //Stock dans un tableau tout les fichiers dans ./commands qui finissent par .js

for (const file of commandFiles){ //Pour chaque fichier de commandes de tout les fichiers de commandes
    const command = require(`./commands/${file}`) //command = un fichier de commandes dont on récupère le contenu + on va chercher le fichier $file
    bot.commands.set(command.name, command) //On défini la commande par son nom et son action
}



//Analyse des messages
bot.on('message', message => {


    if (message.type !== 'DEFAULT' || message.author.bot) return; //Si le message n'est pas "Par défaut" et qu'il provient d'un bot NOTHING HAPPEN
    const args = message.content.split(/ +/) //Récupère l'argument dans le message 
    //On récupère la commaned et la vérifie
 
    const commandName = args.shift().toLowerCase() //Fait fonctionnner les commandes même en majuscules
    if (!commandName.startsWith(config.prefix)) return // Si la commande ne commence pas par le préfix

    const command = bot.commands.get(commandName.slice(config.prefix.length)) //La "commandS" est rechercher en fonction du commandName duquel on a retiré le préfix
    if (!command)
    {message.reply("Je ne sais pas faire ça, je vais demander de l'aide à mon médecin"); return} // Si c'est une commande qui n'existe pas

    //On execute la commande
    try{
        command.execute(message, args)
    }
    catch (error){
        console.error(error);
        message.reply("Oops je crois que quelque chose c'est mal passé"); //Réponse en cas d'erreur
    }
})