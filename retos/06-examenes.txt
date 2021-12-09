console.clear();

const paresresult = {notas: [-3, -2, 7, -5],resultetivo: 10};

const main = (numbers:number[],result:number) => {
    let caso:any[] = [];
    for(let x = 1 ; x <= numbers.length ; x++){
        let key = false;
        if(key){ break };
        for(let y = 1 ; y <= numbers.length ; y++){
            if(x !== y){if(paresresult.notas[x - 1] + paresresult.notas[y - 1] == result){caso = [paresresult.notas[x - 1],paresresult.notas[y - 1]]}}
            if(caso.length > 0){key = true ; break }
        }
    }
    if (caso.length == 0){return null}else{return caso};
}

console.log(main(paresresult.notas,paresresult.resultetivo));