console.clear();

const main = (veces:number) => {
  const precio = 12;
  const precioinfiel = 12 * veces;
  let preciofidelidad = 250;
  let precioida = precio;

  for(let i = 1 ; i <= veces ; i++){
    precioida == precioida * 0.75;
  }

  console.log(precioida);

  preciofidelidad += precioida;

  console.log({precioinfiel,preciofidelidad});

}

console.log(main(20));


