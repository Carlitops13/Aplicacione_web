// Simular un carrito de compras  calcular el total usando reduce 

let carrito = [
    { nombre:"aguacate", precio: 2.5, cantidad: 3 },
    { nombre:"pan", precio: 1.5, cantidad: 2 },
    { nombre:"leche", precio: 1.0, cantidad: 1 }

];

let total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
console.log("El total del carrito es: " + total.toFixed(2));


// Crear una funcion que reciba un nombre y una edad y devuelva un mensaje de bienvenida

nombre = process.argv[2];
edad = process.argv[3];

function saludo(nombre, edad) {

    
    return edad >= 18 ? `Hola ${nombre}, bienvenido!` : `Hola ${nombre}, eres menor de edad!`;  

}
console.log(saludo(nombre, edad));

// Reporte de estudiantes

let estudiantes = [
    { nombre: "Carlos", edad: 20, calificacion: [8,9,7] },
    { nombre: "Ana", edad: 17, calificacion: [6,7,9] },
    { nombre: "Luis", edad: 22, calificacion: [7,5,10] },
    { nombre: "Maria", edad: 19, calificacion: [6,9,4] },
    { nombre: "Sofia", edad: 18, calificacion: [9,8,6] },
    { nombre: "Pedro", edad: 21, calificacion: [5,7,8] },
    { nombre: "Lucia", edad: 16, calificacion: [8,6,7] },
    { nombre: "Jorge", edad: 23, calificacion: [7,9,5] },
    { nombre: "Valentina", edad: 20, calificacion: [6,8,9] },
    { nombre: "Diego", edad: 19, calificacion: [5,6,7] }
];

// promedio de cada estudiante 

estudiantes.forEach(estudiante => { 
    let promedio = estudiante.calificacion.reduce((acc,cal ) => acc + cal, 0) / estudiante.calificacion.length;
    console.log(`El promedio de ${estudiante.nombre} es: ${promedio.toFixed(2)}`);
});

// genere un nuevo array con nombre, promedio y estado 
// Estado: Aprobado (promedio >= 7) o Reprobado (promedio < 7   )

let reporte = estudiantes.map(estudiante => {
    let promedio = estudiante.calificacion.reduce((acc, cal) => acc + cal, 0) / estudiante.calificacion.length;
    let estado = promedio >= 7 ? "Aprobado" : "Reprobado";
    return { nombre: estudiante.nombre, promedio: promedio.toFixed(2), estado: estado };
});
console.log(reporte);

// mostrar solo aprobados 

let aprobados = reporte.filter(estudiante => estudiante.estado === "Aprobado");
console.log("Estudiantes aprobados: ");
aprobados.forEach(estudiante => console.log(`- ${estudiante.nombre}: ${estudiante.promedio}`));

// Mostrar nombres en mayusculas

let mayusculas = estudiantes.map(estudiante => estudiante.nombre.toUpperCase());
console.log("Nombres en mayusculas: " + mayusculas);    