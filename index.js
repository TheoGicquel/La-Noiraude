/**
 * @file index.js
 * @requires discord.js
 * @fileoverview Racine du robot discord
 * @author Theo Gicquel <theo.gicquel.work@gmail.com>
 * @author Julien Mocquet <email>
 */

/** requisistion des modules nécessaires */
const Discord = require('discord.js')
var config = require('./config.json');
var fs = require("fs")

/** Initialisation du robot a l'aide du constructeur */
bot = new Discord.Client();

/** mise en place d'affichage automatique des messages d'erreur */
bot.on("error", (e) => console.error(e));
bot.on("warn", (e) => console.warn(e));
//bot.on("debug", (e) => console.info(e));

/** Association du robot avec son jeton de connexion a l'API discord */
bot.login(config.tokenBot);

/** Création d'une collection de commandes du robot */
bot.commands = new Discord.Collection();

/** actions effectués après l'initialisation du root */
bot.once('ready', () => {
    console.info(`${bot.user.tag} launched`);
    bot.user.setActivity("`!aide` pour afficher les commandes");
})

/**
 * importation de chaque module de commande présent dans `./commands/`
 *  a la collection de commandes du bots
 */
const commandFiles = fs.readdirSync('./commands').filter(
    file => file.endsWith('.js')
); 

for (const file of commandFiles){
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
}

/** evenement asynchrone effectué quand un message est envoyé dans un salon */
bot.on('message', message => {
    /** ignore tous les messages au type `DEFAULT` et ceux émis par le robot */
    if (message.type !== 'DEFAULT' || message.author.bot){
        return;
    }

    /** Parsage du message en arguments  */
    const args = message.content.split(/ +/)
 
    /**
     * @const nom de la commande */
    const commandName = args.shift().toLowerCase()

    /** ignore les messages sans préfixe */
    if (!commandName.startsWith(config.prefix)){
        return;
    }

    /** recherche de la commande parmi la collection */
    const command = bot.commands.get(commandName.slice(config.prefix.length)) 
    


    /** en cas de commande non trouvée  */
    if(!command){
        message.reply(
            "Je ne sais pas faire ça, je vais demander de l'aide à mon médecin"
        );
        return;
    } 
    
    /** Tentative d'exécution de la commande */
    try{
        command.execute(message, args)
    }
    catch (error){
        console.error(error);
        message.reply("Oops je crois que quelque chose c'est mal passé");
    }
})
