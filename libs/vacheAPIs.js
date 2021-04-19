/** @file vacheAPIs.js */

/** constructeur de vecteur générique ( pourrait être inutile) */
var vector = {
    x:undefined, 
    y:undefined,
    name:undefined
};

/** Tableau de stockage des piquets définissant l'enclos*/
let enclos = []
exports.vacheEnclos = enclos;
/**
 Ajoute un piquet dans un nouveau dans le tableau dédié à l'enclos
* @param {number} coordX Cordonnees x du nouveau piquet
* @param {number} coordY Cordonnees y du nouveau piquet
*/
exports.ajoutPiquet = function ajoutPiquet(tableau, coordX,coordY){
    let nouveauPiquet = {
        "x": coordX,
        "y": coordY
      }
    tableau.push(nouveauPiquet);
}

exports.enlevementPiquet = function enlevementPiquet(tableau,index){
    tableau.pop[index];
}

exports.razPiquets = function razPiquet(tableau){
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

exports.lancement = function(){
    let resultat = {};
    resultat.centregrav = getCentreGravite(enclos);
    resultat.presenceVache = GetAppartenancePointPolygone(enclos,resultat.centregrav); 
    return resultat;
}