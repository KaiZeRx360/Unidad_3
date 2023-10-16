const obtenerNombre = nombre => nombre; 

const saludar = (nombre) => {
    return `Hola ${nombre}`   
}
console.log(saludar(obtenerNombre("Luis"))); 

const calificaciones = [100, 88, 75, 74, 68, 85] .

calificaciones.forEach((valor, index, arr) =>{ 
    console.log("valor", valor, "Index", index, "arr", arr);
});

console.log(calificaciones.filter((calificacion) => calificacion <=70)); 


