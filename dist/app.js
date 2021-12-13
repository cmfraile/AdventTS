"use strict";
console.clear();
var main = function (times) {
    var gastonormal = 12 * times;
    var gastofidelidad = 250;
    var idafidelidad = 12;
    var fidelidadviabletimes = 0;
    for (var i = 1; i <= times; i++) {
        idafidelidad *= 0.75;
        gastofidelidad = gastofidelidad + idafidelidad;
    }
    gastofidelidad = Number(gastofidelidad.toFixed(2));
    if (gastofidelidad < gastonormal) {
        return true;
    }
    else {
        return false;
    }
    ;
};
console.log(main(24));
//# sourceMappingURL=app.js.map