console.clear();

const letter = "() bici";
interface analisis {letter:string,inicio:number,fin:number,longitud:number,validez?:boolean}

const main = () => {
    const esvalido = (argumento:analisis):boolean => {
        let caso = true;
        if(argumento.inicio == -1 || argumento.fin == -1){return false};
        let lettertf:any = letter.split('');
        lettertf.forEach((x:any,index:any) => { if(index < argumento.inicio){lettertf.shift()} });
        for(let i = (argumento.longitud - argumento.fin);i>=2;i--){lettertf.pop()};
        lettertf.forEach((x:string,i:number) => {
            if(x == '(' || x == ')' || x == ' '){lettertf[i] = ''}
        });
        lettertf = lettertf.join('');
        if(lettertf !== ''){caso = true}else{caso = false};
        if(lettertf.match(/[\[\]\{\}]/)){return false};
        return caso;
    }
    let analizar:analisis = {
        letter,
        inicio : letter.indexOf('('),
        fin : letter.indexOf(')'),
        longitud : letter.length
    };
    analizar.validez = esvalido(analizar);
    console.log(analizar);
    return analizar.validez;
}

console.log(main());

