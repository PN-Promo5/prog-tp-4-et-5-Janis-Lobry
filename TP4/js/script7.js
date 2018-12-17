// Exercice 7 : Créez une fonction qui prend en paramètre un tableau de nombres et qui renvoie le nombre d'éléments pairs de ce tableau.
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // create numbers array
function countEvenElm(array) { // count numbers is even in this array
  let i = 0;
  let currentElmt;
  let nbEvenElm = 0;
  while (i < array.length) {
    currentElmt = array[i];
    i++;
    if (currentElmt % 2 === 0) { // test if numbers are even
      nbEvenElm++;
    }
  }
  return nbEvenElm; // return number of element even
}
let nbEvenElm = countEvenElm(array); // call to function
console.log(nbEvenElm); // show in console
