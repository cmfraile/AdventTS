"use strict";
console.clear();
var letter = "(muñeca) consola bici";
var regla = ['[', ']', '{', '}', ' '];
var grinchck = function (letter, inicio, fin) {
    if (inicio == undefined || fin == undefined) {
        return false;
    }
    ;
    if (inicio >= fin) {
        return false;
    }
    ;
    var tfletter = letter.split('');
    for (var i = 1; i < inicio; i++) {
        tfletter.shift();
    }
    ;
    for (var i = (fin + 1); i <= (letter.length - 1); i++) {
        tfletter.pop();
    }
    ;
    //Compruebo si hay alguno simbolo ilegal entre los parentesis:
    var caso = true;
    regla.forEach(function (x) {
        if (tfletter.includes(x)) {
            caso = false;
        }
        ;
    });
    if (!caso) {
        return false;
    }
    ;
    //Compruebo si el parentesis esta vacio:
    console.log(tfletter);
    tfletter.forEach(function (x, index) {
        regla.forEach(function (y) {
            if (x = y) {
                tfletter.splice(index, 1);
            }
        });
    });
    console.log(tfletter);
    tfletter = tfletter.join('');
    if (tfletter.match(/[^a-zA-Záéíóú]/g)) {
        return true;
    }
    else {
        return false;
    }
    ;
};
var main = function (letter) {
    var analisis = {
        inicio: letter.indexOf('('),
        fin: letter.indexOf(')'),
    };
    analisis.check = grinchck(letter, analisis.inicio, analisis.fin);
    console.log(analisis);
    return analisis.check;
};
//main(letter);
main(letter);
//# sourceMappingURL=app.js.map