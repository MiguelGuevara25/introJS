//*Declaración de función

function sumar(numero1 = 0, numero2 = 0) {
    console.log(numero1 + numero2);
}
sumar(50, 90);
sumar(10, 90);
sumar(90);

//*Expresión de la función
const sumar2 = function (n1, n2) {
    console.log(n1 + n2);
}
sumar2(5, 10);