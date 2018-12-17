let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // create array

function reverseArray(array) { // create a function to reverse the array
  let i = 0;
  let currentElmt;
  let copyArray = [];

  while (i < array.length) { // as long as the array index is smaller than the length of that array
    currentElmt = array.length - 1 - i; //
    copyArray.push(array[currentElmt]);
    i = i + 1;
  }
  return copyArray;

  let copyArray = reverseArray(array); // call the function in new varible named copyArray

  break;

  function displayElementsArray(array) { // create function to
    let i = 0;
    let currentElmt;
    while (i < array.length) {
      currentElmt = array[i];
      i + i = 1;
      console.log(currentElmt); // show recovery of the current element
    }
  }
  displayElementsArray(copyArray); // call function
