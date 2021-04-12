/** @file vacheAPIs.js */

/** constructeur de vecteur générique ( pourrait être inutile) */
var vector = {
    x:undefined, 
    y:undefined,
    name:undefined
};

/** Tableau de stockage des piquets définissant l'enclos*/
let enclos = []

/**
 Ajoute un piquet dans un nouveau dans le tableau dédié à l'enclos
* @param {number} coordX Cordonnees x du nouveau piquet
* @param {number} coordY Cordonnees y du nouveau piquet
*/
function ajoutPiquet(coordX,coordY){
    let nouveauPiquet = {
        "x": coordX,
        "y": coordY
      }
    enclos.push(nouveauPiquet);
}

/* Batterie de tests **/
function lancementTests(){
    ajoutPiquet(-1,1);
    ajoutPiquet(-1,-1);
    ajoutPiquet(1,-1);
    ajoutPiquet(1,1);
    let aire = 4;
    let centreGrav = { "x":0, "y":0};
    let vacheInterieur = true;


    testEnclos(enclos,aire,centreGrav,vacheInterieur);

    enclos =[];

    ajoutPiquet(-16.6, -20.1);
    ajoutPiquet(-12.6, -18.6);
    ajoutPiquet(-11.6, -16.6);
    ajoutPiquet(-15.1, -15.1);
    aire = 13.125;
    centreGrav = { "x":-14.226, "y":-17.555};
    vacheInterieur = true;

    testEnclos(enclos,aire,centreGrav,vacheInterieur);
    enclos=[]; // remise à zéro de l'enclos

    ajoutPiquet(-1.1, -1.5);
    ajoutPiquet(2.1, 3.012);
    ajoutPiquet(5.6, -1.21);
    ajoutPiquet(1.97, 4.07);

    aire = 3.563;
    centreGrav = { "x":1.978, "y":1.903};
    vacheInterieur = false;
    testEnclos(enclos,aire,centreGrav,vacheInterieur);

}

/**
 Ajoute un
* @param {Array} enclosEntree Tableau de points de l'enclos
* @param {Number} aireAttendue Aire de l'enclos calculée
* @param {Object} centreGravAttendu centre de gravité obtenu
* @param {Boolean} presenceAttendue Présence ou non de la vache dans l'enclos
* @param {Array} enclosEntree 
*/
function testEnclos(enclosEntree,aireAttendue,centreGravAttendu,presenceAttendue){
    
}