"use strict";
console.clear();
var paresobj = { notas: [6, 7, 1, 2], objetivo: 8 };
var main = function (notasarr, obj) {
    var caso = [];
    notasarr.forEach(function (x, index1) {
        notasarr.forEach(function (y, index2) {
            if (index1 !== index2) {
                if (x + y == obj) {
                    caso = [x, y];
                }
            }
        });
    });
    if (caso.length == 0) {
        caso = null;
    }
    ;
    console.log(caso);
};
main(paresobj.notas, paresobj.objetivo);
//# sourceMappingURL=app.js.map