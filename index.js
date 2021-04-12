/** 
 * @file index.js 
 * Racine du robot discord "la noiraude"
*/

const Discord = require('discord.js')
bot = new Discord.Client(),

config = require('./config.json') //On appelle le fichier de configuration

bot.login(config.tokenBot) //Connexion au bot avec le token du fichier de config
bot.commands = new Discord.Collection() //Stocke les commandes dans le bot

// actions effectuées au lancement
bot.once('ready', () => {
    console.info(`${bot.user.tag} launched`);
    bot.user.setActivity("Appeler son médecin");
})

const fs = require("fs") //Module d'accès au fichier (Déjà préinstallé avec Nodejs)

//Stockage dans un tableau tout les fichiers javascript dans ./commands 
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js')); 

// Importation des commandes dans le bot
for (const file of commandFiles){
    //command = un fichier de commandes dont on récupère le contenu + on va chercher le fichier $file
    const command = require(`./commands/${file}`) 
    // définition de commande par nom et  action
    bot.commands.set(command.name, command) 
}



// Evenement de message addressé au bot
bot.on('message', message => {

    //Si le message != "Par défaut" et qu'il provient d'un bot rien ne se passe
    if (message.type !== 'DEFAULT' || message.author.bot) return;

    // récupération des arguments dans le message
    const args = message.content.split(/ +/)
    //On récupère la commande et la vérifie
 
    // parsage des majuscules en minuscules
    const commandName = args.shift().toLowerCase()

    // Si la commande ne commence pas par le préfix
    if (!commandName.startsWith(config.prefix)) return 

    //La "commandS" est recherchée en fonction du commandName duquel on a retiré le préfixe
    const command = bot.commands.get(commandName.slice(config.prefix.length)) 
    if (!command)// Si c'est une commande qui n'existe pas
    {message.reply("Je ne sais pas faire ça, je vais demander de l'aide à mon médecin"); return} 

    // execution de la commande 
    try{
        command.execute(message, args)
    }
    catch (error){
        console.error(error);
        message.reply("Oops je crois que quelque chose c'est mal passé"); //Réponse en cas d'erreur
    }
})
