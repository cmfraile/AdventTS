console.clear();

const obs = [5, 3, 6, 7, 9]

const main = (obstaculos:number[]) => {
  obstaculos = obstaculos.sort((a,b) => {return a - b});
  let saltos:any[] = [];
  let saltocontador:number = 1;
    for(let i = 0 ; i <= 10 ; i++){
      if(i%saltocontador == 0){saltos.push(i)};
      saltos.forEach((x,index) => {if(obstaculos.includes(x)){saltos[index] = "X"}});
    };
  console.log(saltos);

}

console.log(main(obs));


