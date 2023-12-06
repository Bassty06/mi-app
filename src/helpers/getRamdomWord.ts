
// let words: string[] = [
//     'malucos',
//     'bañesen',
//     'lachola',
//     'gabo feo',
//     'holanda',
    
    
// ];

// export function getRamdomWord(){
     
//     const ramdomIndex = Math.floor( Math.random() * words.length );
//     return words[ramdomIndex];

// }


let words: string[] = [
    'COMPUTADORA',
    'AGUACATE',
    'PAPAYA',
    'VEHICULO',
    'ANIMAL',
    'VETERINARIO',
    'CELULAR',
    'TELEFONO'
];


export function getRandomWord() {

    const randomIndex = Math.floor( Math.random() * words.length );
    return words[randomIndex];
    
}

