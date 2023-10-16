const persona = {
    nombre: "Jcelyn",
    edad: 21,
    sexo: "M",
    casado: false,
    telefonos: [5567354626, 5556462737, 5534685798],
    saludar: function saludar() {
        return "Hola"
    }
}
console.log(persona.edad); 
console.log(persona.telefonos[1]);
console.log(persona.saludar()); 


persona.apellido = "Hernández, Garcés";
console.log(persona);

delete persona.saludar;
console.log(persona);