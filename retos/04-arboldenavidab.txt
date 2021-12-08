console.clear();

const main = (height:number) => {

    if(height < 0 || height > 100){return};

    let hojas:number = 1;
    let ancho:number = height - 1;
    let cadena:string = "";

    //fabricamos las hojas:
    for(let i = 1 ; i <= height ; i++){
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
            for(let i = 1 ; i <= (height-1) ; i++){linea = linea + "_";}
            linea = linea + "#";
            for(let i = 1 ; i <= (height-1) ; i++){linea = linea + "_";}
            if(i == 1){ linea = linea + "\n"; } else { linea = linea };
            return linea;
        };
        cadena = cadena + fabricatronco();
    }

    console.log(cadena);
}

main(9);