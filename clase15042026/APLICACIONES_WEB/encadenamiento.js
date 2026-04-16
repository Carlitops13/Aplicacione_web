new Promise ((resolve, reject) => {
    resolve(5);
})
//suma
.then(num => num * 2)
.then(num => num + 10)
.then(result => console.log(result)) // Imprime 20
.catch(error => console.error(error));
//resta 
new Promise ((resolve, reject) => {
    resolve(20);
})
.then(num => num - 5)
.then(num => num / 3)
.then(result => console.log(result)) // Imprime 5
.catch(error => console.error(error));  

//multiplicacion
new Promise ((resolve, reject) => {
    resolve(4); 
})
.then(num => num * 3)
.then(num => num * 2)
.then(result => console.log(result)) // Imprime 24
.catch(error => console.error(error));

//division
new Promise ((resolve, reject) => {
    resolve(100);   
})
.then(num => num / 4)
.then(num => num / 5)
.then(result => console.log(result)) // Imprime 5
.catch(error => console.error(error));
