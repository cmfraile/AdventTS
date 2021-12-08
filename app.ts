console.clear();

const main = (altura:number) => {
    let hojas:number = 1;
    let ancho:number = altura - 1;
    let cadena:string = "";

    //fabricamos las hojas:
    for(let i = 1 ; i <= altura ; i++){
        let linea:string = "";
        for(let y = 1 ; y <= ancho ; y++){linea = linea + "_"}
        for(let y = 1 ; y <= hojas ; y++){linea = linea + "*"}
        for(let y = 1 ; y <= ancho ; y++){linea = linea + "_"}
        cadena = cadena + linea + "\n" ; ancho-- ; hojas = hojas + 2;
    }

    //fabricamos el tronco:
    for(let i = 1 ; i <= 2 ; i++){
        const fabricatronco = () => {
            let linea:string = "";
            for(let i = 1 ; i <= (altura-1) ; i++){linea = linea + "_";}
            linea = linea + "#";
            for(let i = 1 ; i <= (altura-1) ; i++){linea = linea + "_";}
            linea = linea + "\n";
            return linea;
        };
        cadena = cadena + fabricatronco();
    }

    console.log(cadena);
}

main(5);