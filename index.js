/**
 * @file index.js
 * @requires discord.js
 * @fileoverview Racine du robot discord
 * @author Theo Gicquel <theo.gicquel.work@gmail.com>
 * @author Julien Mocquet <email>
 */
/** Importation librairies */
const Discord = require('discord.js')
bot = new Discord.Client();
var vache = require('./libs/vacheAPIs.js');
var mathAPI = require('./libs/mathAPI.js');
var config = require('./config.json');
var fs = require("fs")
var noiraude = require('./libs/noiraude');
bot.on("error", (e) => console.error(e));
bot.on("warn", (e) => console.warn(e));
//bot.on("debug", (e) => console.info(e));


bot.login(config.tokenBot) //Connexion au bot avec le token du fichier de config
bot.commands = new Discord.Collection() //Stocke les commandes dans le bot

// actions effectuées au lancement
bot.once('ready', () => {
    console.info(`${bot.user.tag} launched`);
    bot.user.setActivity("`!noiraude` pour afficher les commandes");
})

/**
 * importation des modules de commandes présents dans `./commands/`
 *  a la collection de commandes du bots
 */
 const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js')); 
for (const file of commandFiles){
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
}

/** evenement asynchrone effectue quand un message est envoyé dans un salon */
bot.on('message', message => {
    //Si le message != "Par défaut" et qu'il provient d'un bot rien ne se passe
    if (message.type !== 'DEFAULT' || message.author.bot){
        return;
    }

    /** Parsage message saisi
     *  - separation 
     */
    const args = message.content.split(/ +/)
    //On récupère la commande et la vérifie
 
    // parsage des majuscules en minuscules
    const commandName = args.shift().toLowerCase()

    // Si la commande ne commence pas par le prefixe
    if (!commandName.startsWith(config.prefix)) return 

    //La "commandS" est recherchée en fonction du commandName duquel on a retiré le préfixe
    const command = bot.commands.get(commandName.slice(config.prefix.length)) 
    
    // Si c'est une commande qui n'existe pas
    if(!command){
        message.reply("Je ne sais pas faire ça, je vais demander de l'aide à mon médecin");
        return;
    } 
    
    // execution de la commande 
    try{
        command.execute(message, args)
    }
    catch (error){
        console.error(error);
        message.reply("Oops je crois que quelque chose c'est mal passé");
    }
})
