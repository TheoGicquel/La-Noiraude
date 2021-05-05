/**
 * @file io.js
 * @fileoverview Librairie de formatage entrée/sortie
 * @author Theo Gicquel <theo.gicquel.work@gmail.com>
 */

/**
 * Formatte le json fourni en entrée
 * @param  {Object} Json a formatter
 */
function jsonPrettifier(input){
    input=JSON.stringify(input,null,"\t");
    console.log(input);
    return input;
}

  module.exports = {
    jsonPrettifier
  };