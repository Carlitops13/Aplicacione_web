const promesa = new Promise((resolve, reject) => {
  let exito = true;
  if (exito) {
    resolve("La promesa se cumplió con éxito");
  } else {
    reject("La promesa se rechazó");
  }
});

promesa
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("La promesa ha sido procesada");
  })    
  
  ;
