// Exercice 14: Créez une fonction qui prend en paramètre un tableau de chaînes de caractères, qui copie dans un nouveau tableau tous les éléments du tableau passé en paramètre commençant par une voyelle.
let array = ["Hey", "hello", "im", "a", "array", "of", "words"]; // create array

function returnWordStartWithVowel(array) { // function to return the words start with a vowel
  let i = 0;
  let currentElmt;
  let beginWithAVowel;
  let wordsBeginsWithAVowel = []; // create  new array

  while (i < array.length) {
    currentElmt = array[i];
    i = i + 1;
    beginWithAVowel = startWithVowel(currentElmt);
    if (beginWithAVowel) {
      wordsBeginsWithAVowel.push(currentElmt);
    }
  }
  return wordsBeginsWithAVowel; // return words starts with a vowel
}

function startWithVowel(word) { // test if a word start to a vowel
  if (word.charAt(0).toUpperCase() === 'A' ||
    word.charAt(0).toUpperCase() === 'E' ||
    word.charAt(0).toUpperCase() === 'I' ||
    word.charAt(0).toUpperCase() === 'O' ||
    word.charAt(0).toUpperCase() === 'U' ||
    word.charAt(0).toUpperCase() === 'Y') {
    return true;
  } else {
    return false;
  }
}
let arrayOnlyWordsStartWithAVowel = returnWordStartWithVowel(array); //call to function

console.log(arrayOnlyWordsStartWithAVowel); // call to function
