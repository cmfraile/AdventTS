console.clear();

const paresobj = {notas: [6, 7, 1, 2],objetivo: 8};

const main = (notasarr:number[],obj:number) => {
    let caso:any = []; let intentos:any = [];
    notasarr.forEach((x,index1) => {
        notasarr.forEach((y,index2) => {
            if(index1 !== index2){
                if(x + y == obj){caso = [x,y]}
            }
        });
    });
    if (caso.length == 0){caso = null};
    console.log(caso);
}

main(paresobj.notas,paresobj.objetivo);