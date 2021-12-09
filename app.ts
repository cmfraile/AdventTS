console.clear();

const paresobj = {notas: [-3, -2, 7, -5],objetivo: 10};

const main = (notasarr:number[],obj:number) => {
    let caso:any[] = [];
    for(let x = 1 ; x <= notasarr.length ; x++){
        let key = false;
        if(key){ break };
        for(let y = 1 ; y <= notasarr.length ; y++){
            if(x !== y){if(paresobj.notas[x - 1] + paresobj.notas[y - 1] == obj){caso = [paresobj.notas[x - 1],paresobj.notas[y - 1]]}}
            if(caso.length > 0){key = true ; break }
        }
    }
    if (caso.length == 0){return null}else{return caso};
}

console.log(main(paresobj.notas,paresobj.objetivo));