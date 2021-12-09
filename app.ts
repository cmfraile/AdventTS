console.clear();

const store1:any = {
    'estanteria1': {
      'cajon1': {
        'producto1': 'coca-cola',
        'producto2': 'fanta',
        'producto3': 'sprite'
      }
    },
    'estanteria2': {
      'cajon1': 'vacio',
      'cajon2': {
        'producto1': 'pantalones',
        'producto2': 'camiseta' // <- ¡Está aquí!
      }
    }
  }

const store2:any = {
'baul': {
    'fondo': {
    'objeto': 'cd-rom',
    'otro-objeto': 'disquette',
    'otra-cosa': 'mando'
    }
}
}

const main = (store:any,product:string) => {
    let objetos = [];
    for(let x in store){
        for(let y in store[x]){
            for(let z in store[x][y]){
                if(store[x][y][z].length !== 1){objetos.push(store[x][y][z])}
            }
        }
    }
    if(objetos.indexOf(product) !== -1){return true}else{return false}
};

console.log(main(store1,'sprite'));

