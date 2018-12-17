// Exercice 10 : Créez une fonction qui prend en paramètre un tableau de nombres et qui renvoie vrai si ce tableau est ordonné dans l’ordre croissant, faux si ce n’est pas le cas.  //
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // create array 1
let array2 = [6, 16, 7, 5, 31, 9, 74, 12]; // create array 2

function ordered(array) { // function to show if yes or no number of the array is ordered
  let i = 1; // i start with the second index of the table to make a comparison with the previous number
  let currentElmt;
  while (i < array.length) {
    currentElmt = array[i];
    if (currentElmt < array[i - 1]) {
      return false; // return false if no
    }
    i = i + 1;
  }
  return true; // return true if yes
}
console.log("Il n'est pas ordonné (" + ordered(array) + ")"); // show if false
console.log("Il est ordonné (" + ordered(array2) + ")"); // show if true
