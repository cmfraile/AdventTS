console.clear();

const pricesBtc = [39, 18, 29, 25, 34, 32, 5];
const pricesDoge = [18, 15, 12, 11, 9, 7]

const main = (prices:number[]) => {
  let criterio:any = {compra:null,vende:null,beneficio:-1}
  for(let x = 0 ; x <= prices.length ; x++){
    for(let y = 0 ; y <= prices.length ; y++){
      if(x !== y && x !<= y){
        if((prices[y] - prices[x]) > criterio.beneficio){
          criterio.compra = prices[x];
          criterio.vende = prices[y];
          criterio.beneficio = prices[y] - prices[x];
        }
      };
    }
  }
  return criterio.beneficio;
}

main(pricesDoge);
