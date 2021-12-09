"use strict";
console.clear();
var paresobj = { notas: [-3, -2, 7, -5], objetivo: 10 };
var main = function (notasarr, obj) {
    var caso = [];
    for (var x = 1; x <= notasarr.length; x++) {
        var key = false;
        if (key) {
            break;
        }
        ;
        for (var y = 1; y <= notasarr.length; y++) {
            if (x !== y) {
                if (paresobj.notas[x - 1] + paresobj.notas[y - 1] == obj) {
                    caso = [paresobj.notas[x - 1], paresobj.notas[y - 1]];
                }
            }
            if (caso.length > 0) {
                key = true;
                break;
            }
        }
    }
    if (caso.length == 0) {
        return null;
    }
    else {
        return caso;
    }
    ;
};
console.log(main(paresobj.notas, paresobj.objetivo));
//# sourceMappingURL=app.js.map