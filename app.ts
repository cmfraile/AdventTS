console.clear();

const obs = [14, 10, 8, 2, 3, 6]

const main = (obstacles:number[]) => {
  obstacles = obstacles.sort((a,b) => {return a - b});
  for(let i = 1 ; i <= 10 ; i++){
    let saltos:any[] = [];
    for(let y = 0 ; y <= 10 ; y++){
      if(y%i == 0){saltos.push(y)};
      saltos.forEach((x,index) => {if(obstacles.includes(x)){saltos[index] = "X"}});
    }
    if(!saltos.includes("X")){return saltos[1]};
  }
}

console.log(main(obs));


