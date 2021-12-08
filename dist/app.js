"use strict";
console.clear();
var xmas = new Date(2021, 11, 25);
var zero = new Date(0);
/*


const datearray = [new Date('Dec 1, 2021'),new Date('Dec 24, 2021 00:00:01'),new Date('Dec 24, 2021 23:59:59'),new Date("December 20, 2021 03:24:00")];
const datearray = [new Date('Dec 26, 2021'),new Date(2022,2,15)];

datearray.forEach((x,index) => { datearray[index].setHours(x.getHours() + 1) });

const main = () => {
    const datexmas = new Date(hoy.getFullYear(),11,25,1);
    datearray.forEach(x => {
        console.log(x,"--", (datexmas.getDate() - x.getDate()) );
    });

}
*/
//const hoy = new Date();
var datearray = [new Date('Dec 1, 2021'), new Date('Dec 24, 2021 00:00:01'), new Date('Dec 24, 2021 23:59:59'), new Date("December 20, 2021 03:24:00"), new Date('Dec 25, 2021'), new Date('Dec 26, 2021'), new Date('Dec 31, 2021'), new Date('Jan 1, 2022 00:00:01'), new Date('Jan 1, 2022 23:59:59')];
var main = function () {
    datearray.forEach(function (x) {
        var miltest = Date.parse("".concat(xmas)) - Date.parse("".concat(x));
        console.log(Math.ceil(miltest / (1000 * 60 * 60 * 24)));
    });
};
main();
//# sourceMappingURL=app.js.map