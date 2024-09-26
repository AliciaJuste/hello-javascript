/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.twitch.tv/videos/2212289583?t=00h17m45s
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
function sumarNumeros(num1, num2){
    return num1 + num2;
}

console.log(sumarNumeros(34,23));

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
let myArray = [24,5,234,12,67,953,1,567,9];
let numeroMayor = 0;
function elNumeroMayor(numeros){
    for (i = 0; i < numeros.length; i++) {
        if (numeros[i] > numeroMayor) {
            numeroMayor =  numeros[i]
        }
    }
    return numeroMayor;
}

console.log(`El número mayor de ${myArray} es: ${elNumeroMayor(myArray)}`);

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
function numeroVocales(palabra) {
    let totalVocales = 0;

    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] === "a" || palabra[i] === "e" || palabra[i] === "i" || palabra[i] === "o" || palabra[i] === "u") {
            totalVocales++;
        }
    }
    return totalVocales;
}

let palabra = "supercalifragiliespialidoso";
console.log(`El número de vocales que tiene la palabra ${palabra} es ${numeroVocales(palabra)}`);

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
let animales = ["gato", "perro", "loro", "hamster", "iguana"]

function convertirAMayusculas(myArray) {
    let newArray = [];
    let i = 0;
    for (let value of myArray) {
        newArray[i] = value.toUpperCase();
        i++;
    }
    return newArray;
}

console.log(`El nuevo array es: ${convertirAMayusculas(animales)}`);

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    if (numero === 2) {
        return true;
    }
    if (numero %2 === 0) {
        return false;
    }
    for (let i = 3; i <= Math.sqrt(numero); i += 2) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true; //Si pasa todos los chequeos es primo
}

let numeroComprobar = 13;
console.log(`El número ${numeroComprobar} es primo? ${esPrimo(numeroComprobar)?"SI":"NO"}`);

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
let animales1 = ["gato", "perro", "loro", "hamster", "iguana"];
let animales2 = ["mono", "tigre", "perro", "morsa", "hamster", "pantera"];
let animales3 = [];

function buscarElementosComunes(array1, array2) {
    let array3 = [];
    for (i = 0; i < array1.length; i++) {
        for (x = 0; x < array2.length; x++){
            if (array1[i] === array2[x]) {
                array3.push(array1[i]);
            }
        }
    }
    return array3;
}

animales3 = buscarElementosComunes(animales1, animales2);
console.log("Los animales comunes son:" + JSON.stringify(animales3));

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
function sumarPares(arrayNumeros) {
    let suma = 0;
    arrayNumeros.forEach((value) => {
        if (value % 2 === 0) {
            suma += value 
        }
    });
    return suma;
}

let numeros = [34,5,3,677,23,6,87,28,16,90,23];
console.log(`La suma de todos los números pares es ${sumarPares(numeros)}`);

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// 10. Crea una función que calcule el factorial de un número dado