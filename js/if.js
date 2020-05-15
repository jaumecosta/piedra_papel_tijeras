


    jugador1 = prompt('Jugador 1 Introduce 0 para piedra, 1 para papel y 2 para tijeras');
    jugador2 = prompt('Jugador 2 Introduce 0 para piedra, 1 para papel y 2 para tijeras');
  
function juego(jugador1, jugador2){
if(jugador1 == 0 && jugador2 == 1){
console.log('Gana el jugador1 con papel');
} else if(jugador1 ==  0 && jugador2 == 2){
    console.log('Gana jugador 1 con la piedra');
} else if(jugador1 == 2 && jugador2 == 1){
console.log('Gana jugador 1 con las tijeras');
} if(jugador2 == 0 && jugador1 == 1){
    console.log('Gana el jugador 2 con papel');
    } else if(jugador2 ==  0 && jugador1 == 2){
        console.log('Gana jugador 2 con la piedra');
    } else if(jugador2 == 2 && jugador1 == 1){
    console.log('Gana jugador 2 con las tijeras');
    } else {
    console.log('EMPATE');
}
}

juego(jugador1,jugador2)