console.clear();

const main = (altura:number) => {
    //let valor = Math.ceil((altura / 2));
    let cadena = "";
    const generarancho = () => {
        let caso:string = "";
        for(let i = 1 ; i <= altura ; i++){caso = caso + "_"};
        return caso
    }
    let ancho:string = generarancho();

    /*
    for(let i = 1 ; i <= altura ; i++ ){
        let piso = "";
        for( let y = 0 ; y <= altura -1 ; y++ ){
            piso = piso + "*" ;
        }
        cadena = ancho + piso + ancho ;
        cadena = cadena + "\n";
    }
    */

    for(let i = 1 ; i <= altura ; i++){
        let piso:any = ancho;
        if(i == 1){
            piso = piso + "*" + ancho;
            while(piso.length !== altura){ piso = piso.split('') ; piso.shift() ; piso.pop() ; piso = piso.join('')};
            cadena = piso + "\n" + cadena;
            piso = ancho;
        }
        for(let y = 1 ; y <= altura ; y++){

        };
    }

    
    //tronco del arbol de navidad:
    for(let i = 1 ; i <= 2 ; i++){
        for( let y = 1 ; y <= altura ; y++ ){
            if(y == (Math.ceil(altura / 2)) ){ cadena = cadena + "#" }else{ cadena = cadena + "_" }
        }
        cadena = cadena + "\n";
    }

    console.log(cadena);
}

main(5);