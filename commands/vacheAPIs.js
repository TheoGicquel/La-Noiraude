/** @file vacheAPIs.js */

/** constructeur de vecteur générique ( pourrait être inutile) */
var vector = {
    x:undefined, 
    y:undefined,
    name:undefined
};

/** Tableau de stockage des piquets définissant l'enclos*/
let enclos = []

/**
 Ajoute un piquet dans un nouveau dans le tableau dédié à l'enclos
* @param {number} coordX Cordonnees x du nouveau piquet
* @param {number} coordY Cordonnees y du nouveau piquet
*/
function ajoutPiquet(coordX,coordY){
    let nouveauPiquet = {
        "x": coordX,
        "y": coordY
      }
    enclos.push(nouveauPiquet);
}