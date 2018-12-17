// Exercice 4 : Fonction qui prend en paramètre un tableau de nombres et qui renvoie une copie de ce tableau dans laquelle tout les nombres ont été augmentés de 1. //
let array = [6, 1, 0.5, 300, 81, 4.7, -2, -307, 600, 24913];
// create numbers array
function copyArrayEltsIncrease1(array) { //function to copy array increase
  let i = 0;
  let currentElmt;
  let currentElmt2;
  let copyArray = [];
  while (i < array.length) {
    currentElmt = array[i] + 1; // unique row using to recuperation
    i = i + 1;
    copyArray.push(currentElmt);
  }
  return copyArray;
}
let allElementsArrayIncrease1 = copyArrayEltsIncrease1(array); // call function

function displayEltsArray(array) { // function to get all elements > 'first exercice'
  let i = 0;
  let currentElmt;
  while (i < array.length) {
    currentElmt = array[i];
    i = i + 1;
    console.log(currentElmt);
  }
}
displayEltsArray(allElementsArrayIncrease1); // call to function
