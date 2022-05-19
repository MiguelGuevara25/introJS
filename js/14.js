//*Arreglos o Arrays

const numeros = [10, 20, 30, 40, 50];






// //!Acceder a los valores de un arreglo
// console.log(numeros[0]);
// console.log(numeros[1]);
// console.log(numeros[2]);
// console.log(numeros[3]);
// console.log(numeros[4]);


// //!Conocer la extensión de un arreglo
// console.log(meses.length)

// meses.forEach( function(meses){
//     console.log(meses)
// })

numeros.push(60, 70, 80); //?Se agrega al final
numeros.unshift(-10, -20, -30, 100); //?Se agrega al inicio

console.table(numeros);


const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

// meses.pop(); //?Elimina el último elemento
// meses.shift(); //?Elimina el primer elemento
meses.splice(2, 1);
console.table(meses);

//!Rest Operator o Spread Operator

const nuevoArreglo = [...meses, 'Junio'];
console.log(nuevoArreglo);