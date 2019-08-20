// Se genera un numero aleatorio entre 0 y el tamaño de WIDTH o HEIGHT que es lo que se pasara por parametro
let getRandomNumber = (size) => {
    return Math.floor(Math.random() * size);
}

// Usando el teorema de pitagoras calculamos la distancia entre el click del usuario y el target(tesoro)
let getDistance = (event, target) => {
    let diffX = event.offsetX - target.x;
    let diffY = event.offsetY - target.y;
    return Math.sqrt( (diffX * diffX) + (diffY *diffY) );
}

// Se generan pistas dependiendo de los pixeles a los que se encuentre el click
let getDistanceHint = distance => {
    if (distance < 30) {
        return "Boiling Hot!";
    } else if (distance < 40) {
        return "Really Hot";
    } else if (distance < 60) {
        return "Hot";
    } else if (distance < 100) {
        return "Warm";
    } else if (distance < 180) {
        return "Cold";
    } else if (distance < 360) {
        return "Really Cold";
    } else {
        return "Freesing!";
    }
}