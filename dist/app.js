"use strict";
console.clear();
var coins = [50, 20, 10, 5, 2, 1];
var main = function (change) {
    var contado = 0;
    var indice = 0;
    var cambiobj = { 50: 0, 20: 0, 10: 0, 5: 0, 2: 0, 1: 0 };
    while (contado < change) {
        if ((contado + coins[indice]) <= change) {
            contado += coins[indice];
            cambiobj["".concat(coins[indice])]++;
        }
        else {
            indice++;
        }
    }
    return [cambiobj[1], cambiobj[2], cambiobj[5], cambiobj[10], cambiobj[20], cambiobj[50]];
};
console.log(main(14));
/*while(contado < change){
  let indice = 0;
  console.log(indice);
  if(contado + coins[indice] < change){
    change = change + coins[indice];
    cambiobj[`${coins[indice]}c`]++;
  } else {
    indice++
  }
}*/
//# sourceMappingURL=app.js.map