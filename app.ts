console.clear();

const xmas = new Date(2021,11,25);
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

const hoy = new Date();
const datearray = [new Date('Dec 1, 2021'),new Date('Dec 24, 2021 00:00:01'),new Date('Dec 24, 2021 23:59:59'),new Date("December 20, 2021 03:24:00"),new Date('Dec 25, 2021'),new Date('Dec 26, 2021'),new Date('Dec 31, 2021'),new Date('Jan 1, 2022 00:00:01'),new Date('Jan 1, 2022 23:59:59')];

const main = () => {

    datearray.forEach((x,index) => {
        console.log(xmas.getDate() - x.getDate());
    });
}

main()