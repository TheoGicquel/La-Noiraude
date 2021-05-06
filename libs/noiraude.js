/**
 * @file noiraude.js
 * @fileoverview Informations stockées sur le pré de la noiraude
 * @author Theo Gicquel <theo.gicquel.work@gmail.com>
 */

var enclos = []

/** Getters */
function getEnclos(input){
    return enclos;
}

/** Setters */
function setEnclos(value){
    enclos=value;
    return enclos;
}

function setEnclosIndex(index,value){
    enclos[index]=value;
    return enclos;
}

function pushEnclos(value){
    enclos.push(value);
}



 module.exports = {
    getEnclos,
    setEnclos,
    setEnclosIndex,
    pushEnclos,
    enclos
 };