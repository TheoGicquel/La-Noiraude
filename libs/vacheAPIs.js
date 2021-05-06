/** @file vacheAPIs.js */

/** constructeur de vecteur générique ( pourrait être inutile) */
var vector = {
    x:undefined, 
    y:undefined,
    name:undefined
};

/** Tableau de stockage des piquets définissant l'enclos*/
let enclos = [];

/**
 Ajoute un piquet dans un nouveau dans le tableau dédié à l'enclos
* @param {number} coordX Cordonnees x du nouveau piquet
* @param {number} coordY Cordonnees y du nouveau piquet
*/
function ajoutPiquet(tableau, coordX,coordY){
    let nouveauPiquet = {
        "x": coordX,
        "y": coordY
      }
    tableau.push(nouveauPiquet);
}

function enlevementPiquet(tableau,index){
    tableau.pop[index];
}

function razPiquet(tableau){
    tableau=[];
}

/* Batterie de tests **/

/**
 Ajoute un
* @param {Array} enclosEntree Tableau de points de l'enclos
* @param {Number} aireAttendue Aire de l'enclos calculée
* @param {Object} centreGravAttendu centre de gravité obtenu
* @param {Boolean} presenceAttendue Présence ou non de la vache dans l'enclos
* @param {Array} enclosEntree 
*/
function testEnclos(enclosEntree,aireAttendue,centreGravAttendu,presenceAttendue){
    
}

function lancement(){
    let resultat = {};
    resultat.centregrav = getCentreGravite(enclos);
    resultat.presenceVache = GetAppartenancePointPolygone(enclos,resultat.centregrav); 
    return resultat;
}

module.exports.enclos = enclos;
module.exports.ajoutPiquet = ajoutPiquet;
module.exports.enlevementPiquet = enlevementPiquet;
module.exports.razPiquet = razPiquet;
module.exports.lancement = lancement;