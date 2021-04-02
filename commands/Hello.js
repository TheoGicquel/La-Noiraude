const ListHello = [ //Liste des hello
    'Hello les Loulous',
    'Bonjour les amis',
    "Allo Docteur ici la Noiraude",
];

module.exports = {
    execute(message,args){
        message.channel.send(`${ListHello[Math.floor(Math.random() * ListHello.length)]}`); //floor retire la décimal // Math.random = un chiffre entre 0 et 1 (exclus)
    },
    name: "hello",
};