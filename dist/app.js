"use strict";
console.clear();
var arraygft = ["🏈🎸", "🎮🧸"];
var main = function (gifs) {
    //Los emojis 🎁 son 2 de ancho por 1 de "alto";
    var alto = gifs.length;
    var ancho = 0;
    gifs.forEach(function (x) {
        if (x.length > ancho) {
            ancho = x.length;
        }
        ;
    });
    var fabricar = "";
    for (var x = 1; x <= ancho + 2; x++) {
        fabricar += "*";
    }
    ;
    fabricar += "\n";
    gifs.forEach(function (x) {
        fabricar += "*" + x + "*" + "\n";
    });
    for (var x = 1; x <= ancho + 2; x++) {
        fabricar += "*";
    }
    ;
    fabricar += "\n";
    return fabricar;
};
console.log(main(arraygft));
//# sourceMappingURL=app.js.map