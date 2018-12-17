//Créez une fonction qui prend en paramètre un tableau de nombres et qui, pour tous les éléments de ce tableau, affiche si cet élément est pair ou non. /
let array = [39, 1, 2, 3, 4, 5, 6, 7, 57686574, 8, 9, 10];

function maxValueOfArray(array) { //function count max value //
  let i = 0;
  let currentElmt;
  let maxValue = array[0]; // initialise maxValue with the first element of the array //
  while (i < array.length) {
    i = i + 1;
    currentElmt = array[i];
    if (currentElmt > maxValue) {
      maxValue = currentElmt;
    }
  }
  return maxValue; // return maxValue of the array //
}
let maxValue = maxValueOfArray(array); // call function //
console.log(maxValue); // show in console //
