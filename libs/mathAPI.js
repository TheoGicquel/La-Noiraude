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
    let tempy = u.y * v.y;
    return tempx+tempy;
}

/**
* calculer l'angle entre les segments de droite 
* @param {vector} segA 
* @param {vector} segB
* @returns {number} produit scalaire de sortie
*/
function getAngleSegment(segA,segB){
    let tempA = getProduitScalaire(segA,segB); // !FIXME confusion ici
    let tempB = getVectorNorme(segA) * getVectorNorme(segB)
    return Math.acos(tempA/tempB);
}

/**
* retourne vrai si G appartient à P et faux sinon
* @param {polygone} P polygone
* @param {point} G point
* @returns {boolean} appartenance
*/
function GetAppartenancePointPolygone ( P, G){
    let Somme, Thetai, i;
    Somme = 0.0
    for(i=0;i<n-1;i++){
        Thetai = getThetaI(undefined);
        Somme += Thetai;
    }
    if(Somme == 2*Math.PI){
        return true;
    }
    else{
        return false;
    }
}

/**
* calculer l'aire du polygone fourni en entrée
* @param {Array} polygone 
* @returns {number} Aire obtenue
*/
function getAirePolygone(polygone){
    let result=0;
    let tempA=0;
    let tempB=0;
    let i;
    polygone.push(polygone[0]);
    let nbrValeursPolygone=polygone.length;
    for(i=0;i<nbrValeursPolygone-1;i++){
        tempA = polygone[i].x * polygone[i+1].y;
        tempB = polygone[i+1].x * polygone[i].y;
        result += tempA-tempB;
    }
    return result*(0.5);
}