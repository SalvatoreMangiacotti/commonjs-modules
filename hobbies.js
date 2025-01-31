// 2 - hobbies.js
// 1. Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree.
// La funzione dovrebbe restituire un array di stringhe contenenti gli hobby.
// 2. Esporta la funzione dal file. 

const getUserHobbies = (hobbyOne, hobbyTwo, hobbyThree) => {

    const hobbies = [hobbyOne, hobbyTwo, hobbyThree];

    return hobbies;

}

console.log(getUserHobbies('Bongo Drumming', 'Banana Cooking', 'Treasure Hunting'));

module.exports = getUserHobbies;