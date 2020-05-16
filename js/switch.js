var jugador1 = prompt('Jugador 1 Introduce 0 para piedra, 1 para papel y 2 para tijeras');
var jugador2 = prompt('Jugador 2 Introduce 0 para piedra, 1 para papel y 2 para tijeras');



switch(jugador1, jugador2) {
    case 2 && 1:
        console.log("gana  tijeras");
        break;
    case 1 && 0:
        console.log("gana papel");
        break;
    case 2 && 0:
        console.log("gana piedra");
        break;
    default:
        console.log('Empate');
}