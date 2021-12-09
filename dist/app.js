"use strict";
console.clear();
var store1 = {
    'estanteria1': {
        'cajon1': {
            'producto1': 'coca-cola',
            'producto2': 'fanta',
            'producto3': 'sprite'
        }
    },
    'estanteria2': {
        'cajon1': 'vacio',
        'cajon2': {
            'producto1': 'pantalones',
            'producto2': 'camiseta' // <- ¡Está aquí!
        }
    }
};
var store2 = {
    'baul': {
        'fondo': {
            'objeto': 'cd-rom',
            'otro-objeto': 'disquette',
            'otra-cosa': 'mando'
        }
    }
};
var main = function (store, product) {
    var objetos = [];
    for (var x in store) {
        for (var y in store[x]) {
            for (var z in store[x][y]) {
                if (store[x][y][z].length !== 1) {
                    objetos.push(store[x][y][z]);
                }
            }
        }
    }
    if (objetos.indexOf(product) !== -1) {
        return true;
    }
    else {
        return false;
    }
};
console.log(main(store1, 'sprite'));
//# sourceMappingURL=app.js.map