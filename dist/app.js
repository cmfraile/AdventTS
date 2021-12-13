"use strict";
console.clear();
var obs = [5, 3, 6, 7, 9];
var main = function (obstaculos) {
    obstaculos = obstaculos.sort(function (a, b) { return a - b; });
    var saltos = [];
    var saltocontador = 1;
    for (var i = 0; i <= 10; i++) {
        if (i % saltocontador == 0) {
            saltos.push(i);
        }
        ;
        saltos.forEach(function (x, index) { if (obstaculos.includes(x)) {
            saltos[index] = "X";
        } });
    }
    ;
    console.log(saltos);
};
console.log(main(obs));
//# sourceMappingURL=app.js.map