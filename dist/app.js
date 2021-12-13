"use strict";
console.clear();
var obs = [14, 10, 8, 2, 3, 6];
var main = function (obstacles) {
    obstacles = obstacles.sort(function (a, b) { return a - b; });
    var _loop_1 = function (i) {
        var saltos = [];
        for (var y = 0; y <= obstacles[obstacles.length - 1]; y++) {
            if (y % i == 0) {
                saltos.push(y);
            }
            ;
            saltos.forEach(function (x, index) { if (obstacles.includes(x)) {
                saltos[index] = "X";
            } });
        }
        if (!saltos.includes("X")) {
            return { value: saltos[1] };
        }
        ;
    };
    for (var i = 1; i <= obstacles[obstacles.length - 1]; i++) {
        var state_1 = _loop_1(i);
        if (typeof state_1 === "object")
            return state_1.value;
    }
};
console.log(main(obs));
//# sourceMappingURL=app.js.map