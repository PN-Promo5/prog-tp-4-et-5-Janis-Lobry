// Exercice 2 : Créez une fonction qui prend en paramètre un tableau et qui affiche en console les 10 premiers éléments de ce tableau. //

var users = ['Mick1', 'LR1', 'Faouzi1', 'Myriam1', 'Dylan1', 'Mateo1', 'Julien1', 'William1', 'Mick', 'LR', 'Faouzi', 'Myriam', 'Dylan', 'Mateo', 'Julien', 'William'];
// Create array //

function getTenElm(sequence) { // function get 10 elements //
  let i = 0;
  let currentElm;
  while (i < 10) {
    currentElm = sequence[i];
    i = i + 1;
    if (currentElm === undefined) {
      return;
    }

    console.log(currentElm); // show current element //

  }
}
console.log("// Exercice 2 : Créez une fonction qui prend en paramètre un tableau et qui affiche en console les 10 premiers éléments de ce tableau.");
getTenElm(users); // call to function //
