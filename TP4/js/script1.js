// Exercice 1 : Fonction qui prend en paramètre un tableau et qui affiche tous les éléments de ce tableau. //
var users = ['Mick1', 'LR1', 'Faouzi1', 'Myriam1', 'Dylan1', 'Mateo1', 'Julien1', 'William1', 'Mick', 'LR', 'Faouzi', 'Myriam', 'Dylan', 'Mateo', 'Julien', 'William'];
// create array //

function getElm(users) { // function to get all elements
  let i = 0;
  let currentElm;
  while (i < users.length) {
    currentElm = users[i];
    i = i + 1;
    console.log(currentElm); // show current elements
  }
}
getElm(users); // call to function
