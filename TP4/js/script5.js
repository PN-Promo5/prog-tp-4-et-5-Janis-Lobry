// Créez une fonction qui prend en paramètre un tableau de nombres et qui, pour tous les éléments de ce tableau, affiche si cet élément est pair ou non.

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]; // create the array

function nbEvenElements(array) { //function to show if even or odd number
  let i = 0;
  let currentElmt;
  while (i < array.length) {
    currentElmt = array[i]; //recorvery the array in the current elements
    i = i + 1;
    if (currentElmt % 2 === 0) { // if the rest equals 2 it's worth 0
      console.log(currentElmt + " is an even number."); // shows in console the even number
    } else {
      console.log(currentElmt + " is an odd number"); // shows in console the odd number
    }
  }
}
nbEvenElements(array); // call to function on the array
