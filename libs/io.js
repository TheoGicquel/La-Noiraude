/**
 * @file io.js
 * @fileoverview Librairie de formatage entrée/sortie
 * @author Theo Gicquel <theo.gicquel.work@gmail.com>
 */
 const mathAPI = require('../libs/mathAPI.js');
/**
 * Formatte le json fourni en entrée
 * @param  {Object} Json a formatter
 */
function jsonPrettifier(input){
    input=JSON.stringify(input,null,"\t");
    console.log(input);
    return input;
}

function saisieParser(input){

    let group = input.split(":");
    let tempCorrds =[];1
    for (const [i, value] of group.entries()) {
        tempCoords = group[i].split(",");
        group[i]=mathAPI.pointConstructor(parseFloat(tempCoords[0]),parseFloat(tempCoords[1]));
      }
    return group;
}

module.exports = {
    jsonPrettifier,
    saisieParser
};