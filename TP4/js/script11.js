// Créez une fonction qui prend en paramètre un tableau de nombres et qui retourne un autre tableaude nombres constitué des éléments du tableau passé en paramètre. Dans le tableau retourné, chaque

let array = [10, 1, 2, 3, 4, 1, 2, 5, 9, 1, 2, 3, 10];

function copyArrayOccurence(array) {
  let i = 0;
  let currentElmt;
  let copyArray = []; // create new array for copy
  let j; // variable to recorvery the copy array
  let canCopy; // verify if i can copy
  copyArray.push(array[0]); // copy the first element
  while (i + 1 < array.length) {
    currentElmt = array[i + 1];
    i = i + 1;
    j = 0;
    canCopy = true;
    while (j < copyArray.length) {
      if (currentElmt === copyArray[j]) {
      // verify if the number is already on the copyArray
        canCopy = false;
      }
      j = j + 1;
    }
    if (canCopy) {
      copyArray.push(currentElmt); // push the current element in the copyArray
    }
  }
  return copyArray; // return a copy of the first array in the new array
}
let copyArray = copyArrayOccurence(array); // call to function

console.log(copyArray); // equivalent to call a function
