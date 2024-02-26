document.getElementById("boton-jugar").addEventListener("click", function () {

let nombre = prompt("Antes de comenzar, ingresa tu nombre")

//veces que se repetirá el juego
let juegos = prompt(`${nombre} Indica cuantas veces te gustaría jugar`);

//variables de victoria, derrota y empate
let win = 0;
let lose = 0;
let draw = 0;

//Crea un ciclo limitado que es indicado por el usuario
for (let i = 0; i < juegos; i++) {
    let jugada = prompt("Ingresa tu jugada: Piedra - Papel - Tijera");
    let jugada_computer;
    let computer = Math.floor(Math.random() * 3);

    //convierte jugada de computadora de number a string
    if (computer == 0) {
        jugada_computer = "Piedra";
    } else if (computer == 1) {
        jugada_computer = "Papel";
    } else if (computer == 2) {
        jugada_computer = "Tijera";
    }

    //compara ambas jugadas e indica el resultado final
    switch (jugada.toLowerCase()) {
        case "tijera":
        case "tijeras":
            if (jugada_computer == "Tijera") {
                alert(`Tu jugaste ${jugada} y la computadora jugó ${jugada_computer}. Por ende, es un EMPATE ¡Inténtalo otra vez!`);
                draw += 1;
            } else if (jugada_computer == "Piedra") {
                alert(`Tu jugaste ${jugada} y la computadora jugó ${jugada_computer}. Por ende, PERDISTE ¡Inténtalo otra vez!`);
                lose += 1;
            } else if (jugada_computer == "Papel") {
                alert(`Tu jugaste ${jugada} y la computadora jugó ${jugada_computer}. Por ende, GANASTE ¡Juega otra vez!`);
                win += 1;
            }
            break;
        case "piedra":
            if (jugada_computer == "Piedra") {
                alert(`Tu jugaste ${jugada} y la computadora jugó ${jugada_computer}. Por ende, es un EMPATE ¡Inténtalo otra vez!`);
                draw += 1;
            } else if (jugada_computer == "Papel") {
                alert(`Tu jugaste ${jugada} y la computadora jugó ${jugada_computer}. Por ende, PERDISTE ¡Inténtalo otra vez!`);
                lose += 1;
            } else if (jugada_computer == "Tijera") {
                alert(`Tu jugaste ${jugada} y la computadora jugó ${jugada_computer}. Por ende, GANASTE ¡Juega otra vez!`);
                win += 1;
            }
            break;
        case "papel":
            if (jugada_computer == "Papel") {
                alert(`Tu jugaste ${jugada} y la computadora jugó ${jugada_computer}. Por ende, es un EMPATE ¡Inténtalo otra vez!`);
                draw += 1;
            } else if (jugada_computer == "Tijera") {
                alert(`Tu jugaste ${jugada} y la computadora jugó ${jugada_computer}. Por ende, PERDISTE ¡Inténtalo otra vez!`);
                lose += 1;
            } else if (jugada_computer == "Piedra") {
                alert(`Tu jugaste ${jugada} y la computadora jugó ${jugada_computer}. Por ende, GANASTE ¡Juega otra vez!`);
                win += 1;
            }
            break;
        default:
            alert("Jugada inválida. Por favor, introduce Tijera, Piedra o Papel.");
            break;
    }
}

//indica el resumen del juego
alert(`Ganaste ${win} veces, perdiste ${lose} veces y empataste ${draw} veces.`);

//indica el ganador de la ronda
if (win > lose) {
    alert(`¡Felicidades ${nombre}, ganaste!`);
} else if (win < lose) {
    alert(`Lo siento ${nombre}, perdiste.`);
} else if (win == lose) {
    alert(`Esta ronda fue un empate... Gracias ${nombre} por jugar`);
}
})



