"use strict";
console.clear();
var ids = [5, 6, 1, 2, 3, 7, 0].sort();
var main = function (ids) {
    for (var i = 0; i <= ids[ids.length - 1]; i++) {
        if (i !== ids[i]) {
            return i;
        }
    }
    ;
    return ids.length + 1;
};
console.log(main(ids));
//# sourceMappingURL=app.js.map