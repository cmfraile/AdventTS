console.clear();

const carta = "bici coche (balón) bici coche peluche";
interface analisis {carta:string,inicio:number,fin:number,longitud:number,validez?:boolean}

const main = () => {
    const esvalido = (argumento:analisis):boolean => {
        let caso = true;
        if(argumento.inicio == -1 || argumento.fin == -1){return false};
        let cartatf:any = carta.split('');
        cartatf.forEach((x:any,index:any) => { if(index < argumento.inicio){cartatf.shift()} });
        for(let i = (argumento.longitud - argumento.fin);i>=2;i--){cartatf.pop()};
        cartatf.forEach((x:string,i:number) => {
            if(x == '(' || x == ')' || x == ' '){cartatf[i] = ''}
        });
        cartatf = cartatf.join('');
        if(cartatf !== ''){caso = true}else{caso = false};
        if(cartatf.match(/[\[\]\{\}]/)){return false};
        return caso;
    }
    let analizar:analisis = {
        carta,
        inicio : carta.indexOf('('),
        fin : carta.indexOf(')'),
        longitud : carta.length
    };
    analizar.validez = esvalido(analizar);
    console.log(analizar);
    return analizar.validez;
}

console.log(main());

