const WIDTH = 400;
const HEIGHT = 400;

let target = {
    x: getRandomNumber(WIDTH),
    y: getRandomNumber(HEIGHT)
};

let $map = document.querySelector('#map');
let $distance = document.getElementById('distance');
let clicks = 0;

$map.addEventListener('click', function(e){
    clicks++;
    let distance = getDistance(e, target);
    let distanceHint = getDistanceHint(distance);

    $distance.innerHTML = `<h1>${distanceHint}</h1>`;
    
    if(distance < 20){
        $distance.innerHTML = `<h1>You has found the treasure in ${clicks} clicks!</h1>`;
    }
}); 