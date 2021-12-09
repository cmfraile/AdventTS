"use strict";
console.clear();
var paresresult = { notas: [-3, -2, 7, -5], resultetivo: 10 };
var main = function (numbers, result) {
    var caso = [];
    for (var x = 1; x <= numbers.length; x++) {
        var key = false;
        if (key) {
            break;
        }
        ;
        for (var y = 1; y <= numbers.length; y++) {
            if (x !== y) {
                if (paresresult.notas[x - 1] + paresresult.notas[y - 1] == result) {
                    caso = [paresresult.notas[x - 1], paresresult.notas[y - 1]];
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
console.log(main(paresresult.notas, paresresult.resultetivo));
//# sourceMappingURL=app.js.map