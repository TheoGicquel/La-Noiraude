
var vector = {
    x:undefined, 
    y:undefined,
    name:undefined
};

vector.x=2;
vector.y=5;

function getVectorNorme(vecteur){

    return Math.sqrt(Math.pow(vecteur.x,2)+Math.pow(vecteur.y,2));
}

getVectorNorme(vector);
