let array = [5, 56, 65, -4, 456, 1, 41, 9, 650, 2500, -690];
displayMaxMinValues(array);

function displayMaxMinValues(array) {
  let i = 0;
  let currentElmt;
  let maxValue = array[0]; // initialise maxValue and minValue with the first value of the array
  let minValue = array[0]; // initialise maxValue and minValue with the first value of the array
  while (i < array.length) {
    i = i + 1;
    currentElmt = array[i];
    if (currentElmt > maxValue) {
      maxValue = currentElmt;
    }
    if (currentElmt < minValue) {
      minValue = currentElmt;
    }
  }
  console.log("Valeur minimum du tableau = " + minValue); // show min value of the array
  console.log("Valuer maximum du tableau = " + maxValue); // show max value of the array
}
