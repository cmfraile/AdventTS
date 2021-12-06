console.clear();

const main = (altura:number) => {
    //let valor = Math.ceil((altura / 2));
    let cadena:string = "";

    for(let i = 1 ; i <= altura ; i++ ){
        for( let y = 0 ; y <= altura -1 ; y++ ){
            cadena = cadena + "_";
        }
        cadena = cadena + "\n";
    }

    for(let i = 1 ; i <= 2 ; i++){
        for( let y = 1 ; y <= altura ; y++ ){
            if(y == (Math.ceil(altura / 2)) ){ cadena = cadena + "#" }else{ cadena = cadena + "_" }
        }
        cadena = cadena + "\n";
    }

    console.log(cadena);
}

main(5);