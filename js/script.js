// bomb generator
function bombGenerator() {
    let i = 0;
    let bombs = [];

    while (i < 16) {
        const bombPosition = Math.floor(Math.random() * 100) + 1;
        if (!bombs.includes(bombPosition)) {
            bombs.push(bombPosition);
            i++
        }
    }

    return bombs.sort();

}

let score = 0;
let userChoice;
let userChoices = [];
let bombs = bombGenerator();

console.table(bombs);

do {
    userChoice = parseInt(prompt('Inserisci un numero da 1 a 100'));
    if (userChoice && userChoice > 0 && userChoice <= 100 && !isNaN(userChoice) && !userChoices.includes(userChoice)) {
        if (!bombs.includes(userChoice)) {
            userChoices.push(userChoice);
            score++;
        } else {
            break;
        }
    } else {
        alert('Valore inserito non corretto o già presente');
    }
} while (userChoices.length < 100 - 16)

console.log('Punteggio:', score);

alert('Il tuo punteggio è: ' + score);
