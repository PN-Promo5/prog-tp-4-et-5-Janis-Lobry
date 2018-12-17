// Exercice 6 : Créez une fonction qui prend en paramètre un tableau de nombres, et qui renvoie la somme des éléments de ce tableau. //
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]; // create numbers array //
function sumAllElmsArray(array) { // function get sum of many numbers //
  let i = 0;
  let currentElmt;
  let sum = 0;
  while (i < array.length) {
    currentElmt = array[i];
    i = i + 1;
    sum += currentElmt;
  }
  return sum; // return vallue : sum //
}
let sum = sumAllElmsArray(array); // call function //

console.log(sum); // show in console //
