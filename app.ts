console.clear();

// CODIGO #01 - Contando ovejas para dormir :

interface oveja {name:string,colour:string}

const arrayovejas:oveja[] = [
    { name: 'Noa', colour: 'azul' },
    { name: 'Euge', colour: 'rojo' },
    { name: 'Navidad', colour: 'rojo' },
    { name: 'Ki Na Ma', colour: 'rojo' }
];

const regla = ['A','a','N','n'];

const main = () => {
    let nuevoarray:any[] = [];
    arrayovejas.forEach( oveja => {
        if (oveja.colour !== "rojo"){return};
        let caso:boolean = false ; regla.forEach(letra => {if(oveja.name.includes(letra)){caso = true}}) ; if(!caso){return};
        nuevoarray.push(oveja);
    });

    console.log(nuevoarray);

}

main();


