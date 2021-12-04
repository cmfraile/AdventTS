"use strict";
console.clear();
var arrayovejas = [
    { name: 'Noa', colour: 'azul' },
    { name: 'Euge', colour: 'rojo' },
    { name: 'Navidad', colour: 'rojo' },
    { name: 'Ki Na Ma', colour: 'rojo' }
];
var regla = ['A', 'a', 'N', 'n'];
var main = function () {
    var nuevoarray = [];
    arrayovejas.forEach(function (oveja) {
        if (oveja.colour !== "rojo") {
            return;
        }
        ;
        var caso = false;
        regla.forEach(function (letra) { if (oveja.name.indexOf(letra) !== -1) {
            caso = true;
        } });
        if (!caso) {
            return;
        }
        ;
        nuevoarray.push(oveja);
    });
    console.log(nuevoarray);
};
main();
//# sourceMappingURL=app.js.map