// Exercice 13: Créez une fonction qui prend en paramètres deux tableaux de nombres et qui retourne un tableau correspondant à la concaténation des deux tableaux d'entiers passés en paramètres.
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // create first array
let array2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]; // create second array

function concatenateTwoArrays(array1, array2) { // create function to concatenate two arrays
  let i = 0;
  let currentElmt;
  let concatenateArrays = []; // create concatenate array

  while (i < array1.length) {
    currentElmt = array1[i];
    i = i + 1;
    concatenateArrays.push(currentElmt); // push current element (array1) in the concatenateArrays
  }
  i = 0;
  while (i < array1.length) {
    currentElmt = array2[i];
    i = i + 1;
    concatenateArrays.push(currentElmt); // push current element (array2) in the concatenateArrays
  }
  return concatenateArrays;
}
let concatenateArrays = concatenateTwoArrays(array1, array2); // concatenation of first & second array

console.log(concatenateArrays); // call to function
