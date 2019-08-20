// constantes del ancho y alto de la imagen para ubicar las coordenadas
// Añadimos las variables necesarias
const WIDTH = 400;
const HEIGHT = 400;
let $map = document.querySelector('#map');
let $distance = document.querySelector('#distance');
let clicks = 0;
let target = {
    x: getRandomNumber(WIDTH),
    y: getRandomNumber(HEIGHT)
};

// Mediante este listener se captura el evento y se ejecuta el juego
$map.addEventListener('click', (e) => {
    clicks++;
    let distance = getDistance(e, target);
    let distanceHint = getDistanceHint(distance);

    $distance.innerHTML = `<h1>${distanceHint}</h1>`;
    
    // Si la distancia del click es menor que 20px el juego finaliza y ganas.
    if(distance < 20){
        $distance.innerHTML = `<h1>You has found the treasure in ${clicks} clicks. You Win!</h1>`;
    } else if(clicks > 35){
        return $distance.innerHTML = `<h1>You don't found the treasure in ${clicks} clicks. You Loss!</h1>`;
    }
}); 