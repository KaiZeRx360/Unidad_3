function despedir(nombre) {
    return `Adios ${nombre}` 
    
}

console.log(despedir("Anita"));


let funcionAlmacenada = function saludar(nombre) {
    return `Adios ${nombre}`  
}
console.log(funcionAlmacenada("Sebastian"));

//Funciones Anonimas.

let funcionAnonimaAlmacenada = function (nombre) {
    return `Adios ${nombre}`  
}

console.log(funcionAnonimaAlmacenada("Jocelyn"));//No ocupa espacion en la memoria

console.log(function () {return "Ejecucion"}());

//Parametros predeterminados.

function obtenerPotencia(base, exponente = 2) {
    return base ** exponente;    
}
console.log(obtenerPotencia(2)); //4
console.log(obtenerPotencia(2,3));//8



window.console.log("Hola Mundo");

//Funciones flecha

let functionFlecha = (nombre) => `hola ${nombre}`

console.log(functionFlecha("Emanuel"));

