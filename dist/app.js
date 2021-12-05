"use strict";
console.clear();
var letter = "() bici";
var main = function () {
    var esvalido = function (argumento) {
        var caso = true;
        if (argumento.inicio == -1 || argumento.fin == -1) {
            return false;
        }
        ;
        var lettertf = letter.split('');
        lettertf.forEach(function (x, index) { if (index < argumento.inicio) {
            lettertf.shift();
        } });
        for (var i = (argumento.longitud - argumento.fin); i >= 2; i--) {
            lettertf.pop();
        }
        ;
        lettertf.forEach(function (x, i) {
            if (x == '(' || x == ')' || x == ' ') {
                lettertf[i] = '';
            }
        });
        lettertf = lettertf.join('');
        if (lettertf !== '') {
            caso = true;
        }
        else {
            caso = false;
        }
        ;
        if (lettertf.match(/[\[\]\{\}]/)) {
            return false;
        }
        ;
        return caso;
    };
    var analizar = {
        letter: letter,
        inicio: letter.indexOf('('),
        fin: letter.indexOf(')'),
        longitud: letter.length
    };
    analizar.validez = esvalido(analizar);
    console.log(analizar);
    return analizar.validez;
};
console.log(main());
//# sourceMappingURL=app.js.map