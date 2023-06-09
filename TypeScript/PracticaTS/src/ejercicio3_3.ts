//Para una palabra dada, calculamos su puntuación en Scrabble®
//Añadir anotaciones de tipo siempre que sea posible

function computeScore(word:string):number {

    const letters:string[] = word.toUpperCase().split('');

    return letters.reduce((accum, curr) => accum += getPointsFor(curr), 0);
}

function getPointsFor(letter:string):number {
    const lettersAndPoints:[string, number][] = [
    ['AEOIULNRST', 1],
    ['DG', 2],
    ['BCMP', 3],
    ['FHVWY', 4],
    ['K', 5],
    ['JX', 8],
    ['QZ', 10],
    ];

    return lettersAndPoints.reduce((computedScore:number, pointsTuple:[string, number]) => {
    const [letters, score] = pointsTuple;
    if (letters.split('').find((ll:string) => ll === letter)) {
        return computedScore += score;
    }
    return computedScore;
    }, 0);
}

console.log('[Ejercicio 3.3]', `zoologico vale ${computeScore('zoologico')} puntos.`);

