console.clear();

let carta = 'bici coche balón _playstation bici coche peluche'.split(' ');
const main = () => {
    const regexp = new RegExp(/[^a-zA-Záéíóú]/g)
    carta.forEach( (undefined,index) => {if(!!carta[index].match(regexp)){carta.splice(index,1);}});
    let cartaobjeto:any = {};
    carta.forEach(obj => {
        if(cartaobjeto[obj]){ cartaobjeto[obj]++ }else{cartaobjeto[obj] = 1};
    });
    console.log(cartaobjeto);
}

main();