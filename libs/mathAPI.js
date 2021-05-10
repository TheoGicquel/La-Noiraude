/** @file mathAPI.js */

/**
 * Retourne un objet de point selon les coordonnées
 * fournies en entrée
 * @param {Number} coordX 
 * @param {Number} coordY 
 * @returns {Object} point
 */
function pointConstructor(coordX, coordY){
    let point = {
        "x": coordX,
        "y": coordY
      }
      return point;
}
/**
 Retourne la norme du vecteur fourni en entrée
* @param {number} vecX Cordonnees x du vecteur
* @param {number} vecY Cordonnees y du vecteur
* @returns {number} Norme obtenue
*/
function getVectorNorme(vecteur){
    return Math.sqrt(Math.pow(vecteur.x,2)+Math.pow(vecteur.y,2));
}

/**
* Retourne les coordonnées du vecteur d'entree
* @param {Vector}  input vecteur d'entree
* @returns {Object} outputVector coordonnées du vecteur
*/
function getVectorCoords(input){
    let outputVector = {x:undefined,y:undefined}
    outputVector.x = input.xb  - input.xa;
    outputVector.y = input.yb - input.ya;
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
* @param {Segment} vecA 
* @param {Segment} vecB
* @returns {number} produit scalaire de sortie
*/
function getAngleSegment(vecA,vecB){
    if(vecA.hasOwnProperty("xa")){
        throw "vecteur (x,y) attendu au lieu de segment";
    }

    let tempA = getProduitScalaire(vecA,vecB); // !FIXME confusion ici
    let tempB = getVectorNorme(vecA) * getVectorNorme(vecB)
    return Math.acos(tempA/tempB);
}


/** //FIXME Modifs a apporter
* - réaliser le calcul du déterminant
* - modifier la somme pour prendre en compte le signe de l'angle
* - modifier la condition d'appartenance : si la somme des angles vaut zéro, le point n'appartient pas au polygone
*/

/**
* retourne vrai si G appartient à P et faux sinon
* @param {polygone} P polygone
* @param {point} G point
* @returns {boolean} appartenance
*/
function getAppartenancePointPolygone ( polygone,point){
    let temPoly = polygone;
    temPoly.push(temPoly[0]);
    let result=0;
    let tempVecA;
    let tempVecB;
    for(let i=0;i<polygone.length-1;i++)
    {
        
        tempVecA=segmentConstructor(point,polygone[i]);
        
        tempVecB=segmentConstructor(point,polygone[i+1]);
        tempVecA= getVectorCoords(tempVecA);
        tempVecB= getVectorCoords(tempVecB);
        result+=getAngleSegment(tempVecA,tempVecB);
    }
    
    if(result==2*Math.PI){
        return true;
    }
    else{
        return false;
    }

}
/**
 * retourne un segment a partir de deux points fournis en entréee
 * @param  {Object} pointA
 * @param  {Object} pointB
 */
function segmentConstructor(pointA,pointB){
    let output={xa:pointA.x, ya:pointA.y, xb:pointB.x, yb:pointB.y}
    return output;
}

/**
* calculer l'aire du polygone fourni en entrée
* @param {Array} polygone 
* @returns {Number} result Aire obtenue
*/
function getAirePolygone(polygone){
    let result=0;
    let tempPoly = polygone;
    tempPoly.push(polygone[0]);
    for(let i=0;i<tempPoly.length-1;i++){
        tempA = tempPoly[i].x * tempPoly[i+1].y;
        tempB = tempPoly[i+1].x * tempPoly[i].y;
        result += tempA-tempB;
    }
    return result*(0.5);
}



/**
 * Calcul du centre de gravité d'un polygone
 * @param  {Object} polygone
 * @param  {Number} aire
 */
function getCentreGravite(polygone,aire){
    let centreGrav = {};
    centreGrav.x = getAbscisseGravite(polygone,aire);
    centreGrav.y = getOrdonneeGravite(polygone,aire);
    return centreGrav;
}

/**
* Donne l'abscisse du centre de gravité du polygone
* @param {Object} polygone 
* @param {Number} aire 
* @returns {Number} result abscisse du centre de gravité du polygone
*/
function getAbscisseGravite(polygone, aire){
    let result=0;
    let temPoly=polygone;
    let tempA;
    let tempB;
    let tempAdd;
    temPoly.push(polygone[0]);

    for(let i=0;i<temPoly.length-1;i++){
        tempA = temPoly[i].x * temPoly[i+1].y;
        tempB = temPoly[i+1].x * temPoly[i].y;
        tempAdd = temPoly[i].x + temPoly[i+1].x;
        tempC = tempA-tempB;
        result+=(tempAdd)*(tempA-tempB);
    }
    result = result*(1/(6*aire));
    return result;
}

/**
/*
 * Obtention de l'abscisse du centre de gravité
 * @param  {Object} polygone
 * @param  {Number} aire
 * @returns {Number} result abscisse centre de gravité 
 */
function getOrdonneeGravite(polygone, aire){
    let result=0;
    let temPoly=polygone;
    let tempA;
    let tempB;
    let tempAdd;
    temPoly.push(polygone[0]);

    for(let i=0;i<temPoly.length-1;i++){
        tempA = temPoly[i].x * temPoly[i+1].y;
        tempB = temPoly[i+1].x * temPoly[i].y;
        tempAdd = temPoly[i].y + temPoly[i+1].y;
        tempC = tempA-tempB;
        result+=(tempAdd)*(tempA-tempB);
    }
    result = result*(1/(6*aire));
    return result;
}

/**
* Obtenir le produit scalaire de deux vecteur d'entree
* @param {vector} u vecteur
* @param {vector} v vecteur
* @returns {number} déterminant des deux vecteurs 
*/
function getDeterminant(u,v){
    let tempx = u.x * v.y;
    let tempy = u.y * v.x;
    return tempx-tempy;
}

// Nécessaires
module.exports.getAirePolygone = getAirePolygone;
module.exports.getCentreGravite = getCentreGravite;
module.exports.getAppartenancePointPolygone = getAppartenancePointPolygone;
module.exports.getVectorNorme = getVectorNorme;
module.exports.getVectorCoords = getVectorCoords;
module.exports.getProduitScalaire = getProduitScalaire;
module.exports.getAngleSegment = getAngleSegment;
module.exports.getAbscisseGravite = getAbscisseGravite;
module.exports.getOrdonneeGravite = getOrdonneeGravite;
module.exports.pointConstructor = pointConstructor;
module.exports.getDeterminant = getDeterminant;