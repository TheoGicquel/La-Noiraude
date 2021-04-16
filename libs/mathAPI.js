/** @file mathAPI.js */

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

/**
* retourne vrai si G appartient à P et faux sinon
* @param {polygone} P polygone
* @param {point} G point
* @returns {boolean} appartenance
*/
function GetAppartenancePointPolygone ( polygone,point){
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

function segmentConstructor(pointA,pointB){
    let output={xa:pointA.x, ya:pointA.y, xb:pointB.x, yb:pointB.y}
    return output;
}

/**
* calculer l'aire du polygone fourni en entrée
* @param {Array} polygone 
* @returns {number} Aire obtenu
*/
function getAirePolygone(polygone){
    let result=0.0,tempA=0.0,tempB=0.0,incremented=0,previousResult=1;
    let i;
    let nbrValeursPolygone=polygone.length-1;
    for(i=0;i<nbrValeursPolygone-1;i++){
        

        tempA = polygone[i].x * polygone[incremented].y;
        tempB = polygone[incremented].x * polygone[i].y;

        result += tempA-tempB;
        result = result*previousResult;
        previousResult=result;
    }
    tempA = polygone[nbrValeursPolygone].x * polygone[0].y;
    tempB = polygone[0].x * polygone[nbrValeursPolygone].y;
    result += tempA-tempB;
    result = result*previousResult
    return result*(0.5);
}

