console.clear();

const letter = "(muñeca) consola bici"
const regla = ['[',']','{','}',' '];

const grinchck = (letter:string,inicio:number|undefined,fin:number|undefined) => {
    if(inicio == undefined || fin == undefined){return false} ; if(inicio >= fin){return false} ;
    let tfletter:any = letter.split('');
    for(let i = 1 ; i < inicio ; i++){tfletter.shift()};
    for(let i = (fin + 1) ; i <= (letter.length - 1) ; i++){tfletter.pop()};

    //Compruebo si hay alguno simbolo ilegal entre los parentesis:
    let caso = true;
    regla.forEach( x => {
        if(tfletter.includes(x)){caso = false};
    });
    if(!caso){return false};
    
    //Compruebo si el parentesis esta vacio:
    console.log(tfletter)
    tfletter.forEach((x:string,index:number) => {
        regla.forEach((y:string) => {
            if(x = y){tfletter.splice(index,1)}
        });
    });
    console.log(tfletter);
    
    tfletter = tfletter.join('');
    if(tfletter.match(/[^a-zA-Záéíóú]/g)){return true}else{return false};
    
}

const main = (letter:string) => {
    const analisis:any = {
        inicio : letter.indexOf('('),
        fin : letter.indexOf(')'),
    }
    analisis.check = grinchck(letter,analisis.inicio,analisis.fin);
    console.log(analisis);
    return analisis.check;
}

//main(letter);
main(letter)