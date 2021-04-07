/** @file mathAPI */

/**
 Retourne la norme du vecteur fourni en entree
* @param {number} vecX Cordonnees x du vecteur
* @param {number} vecY Cordonnees y du vecteur
* @returns {number} Norme obtenue
*/
function getVectorNorme(vecX,vecY){
    return Math.sqrt(Math.pow(vecX,2)+Math.pow(vecY,2));
}
