/*

| Nombre              | Sintaxis!
!---------------------|---------|
| and                 |    &&   |
| OR                  |   ||    |
| NOT                 |  |      |
*/
console.info("AND");
console.log(3 > 2 && 2 > 1); //True
console.info("OR");
console.log(3 > 2 || 2 > 1);  //True
console.log(2 > 2 || 2 > 1); _//False
console.info("OR");
console.log(!false); //true
console.log(!true); //false



/*Tablas de verdad AND.
v v = v
v f = f
f v = f
f f = f

Tablas de verdad OR. 
f f = f
f v = v
v f = v
v v = v

Tablas de verdad NOT.

f f = f
v v = v*/