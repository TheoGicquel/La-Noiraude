/**
 * @file io.js
 * @fileoverview Librairie de formatage entrée/sortie
 * @author Theo Gicquel <theo.gicquel.work@gmail.com>
 */


const mathAPI = require('../libs/mathAPI.js');

/** @const saisieFilterRegex - expression régulière pour caractères illégaux */
const saisieFilterRegex =  new RegExp(/[a-zA-Z;]+/g);

/**
 * Formatte le json fourni en entrée
 * @param  {Object} Json a formatter
 */
function jsonPrettifier(input){
    input=JSON.stringify(input,null,"\t");
    return input;
}

/**
 * Valide ou non la chaine de `!saisie` d'entrée à l'aide de regex
 * @param {String} input Chaine de caractères a analyser
 * @returns true,false
 */
function saisieValidation(input){
    if(input.match(saisieFilterRegex)){
        return false;
    }
    else
    {
        return true;
    }
}

/**
 * Convertit la chaine de caractères formatée en Objet d'ensemble de points
 * @function  saisieParser
 * @param  {String} input
 * @returns  {Object} group Groupe de points 
 */
function saisieParser(input){
    let group = input.split(":");
    let tempCoords = [];
    for (const [i, value] of group.entries()) {
        tempCoords = group[i].split(",");
        group[i]=mathAPI.pointConstructor(parseFloat(tempCoords[0]),parseFloat(tempCoords[1]));
      }
    return group;
}

module.exports = {
    jsonPrettifier,
    saisieValidation,
    saisieParser
};