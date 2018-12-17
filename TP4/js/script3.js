// Exercice 3 : Fonction qui affiche les 10 derniers éléments du tableau //
let users = ['Alain', 'Bastien', 'Caro', 'Doudou', 'Eric', 'Fabien', 'Gwen', 'Henri', 'Iris', 'Julien', 'Kam', 'Lucien', 'Marc']
// create array //


function getTenLastElm(users) { //function to get 10 last elements //
  let i = 0;
  let currentElm;

  if (users.length <= 10) {
    while (i < users.length) {

      currentElm = users[i];
      i = i + 1;
      console.log(currentElm); // show current elements add //
    }
  } else {
    while (i < 10) {
      currentElm = users[users.length - 10 + i];
      i = i + 1;
      console.log(currentElm);
    }
  }
}
console.log("// Exercice 3 : Fonction qui affiche les 10 derniers éléments du tableau ");
getTenLastElm(users); // call to function //
