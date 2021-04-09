/** @file mathAPI.js */

/**
 Retourne la norme du vecteur fourni en entrée
* @param {number} vecX Cordonnees x du vecteur
* @param {number} vecY Cordonnees y du vecteur
* @returns {number} Norme obtenue
*/
function getVectorNorme(vecX,vecY){
    return Math.sqrt(Math.pow(vecX,2)+Math.pow(vecY,2));
}

/**
* Retourne les coordonnées du vecteur crée par les deux points A et B en entrée
* @param {number}  A de coordonnées x et y
* @param {number} B de coordonnées x et y
* @returns {Object} outputVector coordonnées du vecteur
*/
function getVectorCoords(A,B){
    let outputVector = {x:undefined,y:undefined}
    outputVector.x = B.x - A.x;
    outputVector.y = B.y - A.y;
    return outputVector;
}

/**
* Obtenir le produit scalaire de deux vecteur d'entree
* @param {vector} u vecteur
* @param {vector} v vecteur
* @returns {number} produit scalaire de sortie
*/
function getProduitScalaire(u,v){
    let tempx = u.x * v.x;
    let tempy = u.y * u.y;
    return tempx+tempy;
}
