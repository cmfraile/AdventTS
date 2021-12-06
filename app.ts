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

    //hojas arbol de navidad:
    for(let i = 1 ; i <= altura ; i++){
        if(i == 1){
            let piso:any = ancho;
            piso = piso + "*" + ancho;
            while(piso.length !== altura){ piso = piso.split('') ; piso.shift() ; piso.pop() ; piso = piso.join('')};
            cadena = piso + "\n" + cadena;
            piso = ancho;
        }else{
            let piso:any = ancho;
            let contador = 1;
            for(let y = 1 ; y <= (contador + 2) ; y++){piso = piso + "*" };
            piso = piso + ancho;
            cadena = cadena + piso + "\n" ;
        }
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