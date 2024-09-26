/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.twitch.tv/videos/2212289583?t=00h17m45s
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let suma = 0;
for (let i = 1; i <= 100; i++) {
    suma += i;
}
console.log("La suma total de los números del 1 al 100 es: " + suma);

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for (let i = 1; i <= 50; i++){
    if (!(i % 2)) {
        console.log(i);
    }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let nombres = ["Ana", "Fernando", "Javier", "David", "Alicia", "Delia"];
for (let i = 0; i < nombres.length; i++) {
    console.log(`${i+1}. ${nombres[i]}`);
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let palabra = "supercalifragiliespialidoso";
let numeroVocales = 0;

for (let i = 0; i < palabra.length; i++) {
    if (palabra[i] === "a" || palabra[i] === "e" || palabra[i] === "i" || palabra[i] === "o" || palabra[i] === "u") {
        numeroVocales++;
    }
}
console.log(`El número de vocales que tiene la palabra ${palabra} es ${numeroVocales}`);
  
// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let numeros = [23, 4, 456, 1, 467, 3, 4235, 23, 6, 90];
let resultado = 0;

for (let i = 0; i < numeros.length; i++) {
    resultado *= numeros[i];
}

console.log(`El resultado de multiplicar todos los números es: ${resultado}`);

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
for (let i = 1; i <= 10; i++) {
    resultado = 5 * i;
    console.log(`5x${i} = ${resultado}`);
}

// 8. Usa un bucle para invertir una cadena de texto
let cadena = "supercalifragiliespialidoso";
let cadenaReves = "";

for (let i = cadena.length; i > 0; i--) {
    cadenaReves += cadena[i-1];
    console.log("Cadena Reves = " + cadenaReves);
}

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let num1 = 0;
let num2 = 1;

console.log(num1);
console.log(num2);

for (let i = 3; i <= 11; i++) {
    let nextNumero = num1 + num2;
    console.log(nextNumero);

    num1 = num2;
    num2 = nextNumero;
}

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let nuevoArray = [];
let i = 0, x = 0;
//let numeros = [23, 4, 456, 1, 467, 3, 4235, 23, 6, 90];
console.log(`Numeros: ${numeros} Longitud: ${numeros.length}`);

while (i < numeros.length) {
    if (numeros[i] > 10) {
        nuevoArray[x] = numeros[i];
        x++;
    }
    i++;
}
console.log(`Nuevo array con números mayores de 10: ${nuevoArray}`);
