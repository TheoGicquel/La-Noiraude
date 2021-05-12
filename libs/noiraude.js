/**
 * @file noiraude.js
 * @fileoverview Informations stockées sur le pré de la noiraude
 * @author Theo Gicquel <theo.gicquel.work@gmail.com>
 */

/** 
 * {Array} myObj
 * {number} myObj.a
 * {string} myObj.b
*/

/**
 * @type {Array} enclos
 * Tableau composé d'objets de piquets ayant chacun des coordonnées `x`et `y`
 */
var enclos = [];

/**
 * @type {Number} maxPiquets
 * Nombre maximal de piquets autorisés
 */
var maxPiquets = 50;

/** Retourne l'
 *  @function getEnclos
 *  @returns {Array} enclos
 */
function getEnclos(input){
    return enclos;
}

/** Assigne a l'enclos, le tableau fourni en entrée
 * @function setEnclos
 * @param {Array} value
 * @returns {Array} enclos Enclos modifié
 */
function setEnclos(value){
    enclos=value;
    return enclos;
}

/** Assigne a un emplacement précis de l'enclos, l'objet piquet fourni en entrée 
 * @function setEnclosIndex
 * @param {Number} index Index visé
 * @returns {Array} enclos Enclos modifié
 */
function setEnclosIndex(index,value){
    enclos[index]=value;
    return enclos;
}

/** Ajoute a la fin de l'enclos le piquet fourni en entrée
 * @function pushEnclos
 * @param {Object} value - Objet de piquet
 * @returns {Array} enclos Enclos modifié
 */
function pushEnclos(value){
    enclos.push(value);
    return enclos;
}



module.exports = {
   getEnclos,
   setEnclos,
   setEnclosIndex,
   pushEnclos,
   enclos,
   maxPiquets
};