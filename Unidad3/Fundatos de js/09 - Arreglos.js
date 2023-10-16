/*Arreglos*/

let calificaciones = [100, 85, 45, 76];
let arregloDiferentesTipo = ["Hola", 10, true, [1,2,3], function getNombre(){
    return "Jocelyn"}] 
let arregloNumero = new Array(5);
let arregloLetras = new Array("a", "b", "c");

console.log("calificaciones", calificaciones);
console.log("arregloDiferentesTipo", arregloDiferentesTipo);
console.log("arregloNumero", arregloNumero);
console.log("arregloLetras", arregloLetras);

console.log(arregloDiferentesTipo[2]); 
console.log(arregloDiferentesTipo[4]()); 
console.log(arregloDiferentesTipo[3][1]);

calificaciones.push(90);
console.log("calificaciones", calificaciones);

calificaciones.unshift(0);
console.log("calificaciones", calificaciones);

calificaciones.pop();
console.log("calificaciones", calificaciones);

calificaciones.shift()
console.log("calificaciones", calificaciones);

let arregloLetrasCopias = arregloLetras; 
arregloLetrasCopias.pop();
console.log(arregloLetras, arregloLetrasCopias);

let arregloLetrasCopias2 = arregloLetras.slice();
arregloLetrasCopias2.pop();
console.log(arregloLetrasCopias2, arregloLetras);

let arregloLetrasCopias3 = [...arregloLetras]
arregloLetrasCopias3.pop();
console.log(arregloLetrasCopias3, arregloLetras);

console.table(calificaciones)








