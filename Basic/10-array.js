/*
Clase 3 en vídeo | 24/07/2024
Condicionales, arrays y sets
https://www.twitch.tv/videos/2206228701?t=00h16m02s
*/

// Array

// Declaración

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// Inicialización

myArray = [3]
myArray2 = new Array(3)

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)

myArray = ["Brais", "Moure", "mouredev", 37, true]
myArray2 = new Array("Brais", "Moure", "mouredev", 37, true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[2] = "Brais"
// myArray2[0] = "Moure"
myArray2[1] = "mouredev"
myArray2[4] = "mouredev"

console.log(myArray2)

myArray = []
myArray[2] = "Brais"
// myArray[0] = "Moure"
myArray[1] = "mouredev"

console.log(myArray)

// MÉTODOS COMUNES
//push: Introducir elementos en el array
//pop: Elimina el último elemento del array y devuelve su valor
//shift: Elimina el primer elemento del array y devuelve su valor
//unshift: Añadir 1 o más elementos al principio del array
//length: Devuelve la longitud del array
//clear: Borrar un array
//slice: Copia el array en otro eligiendo que elementos quieres
//splice: Elimina desde la posicion indicada, los elementos indicados, tambien puede añadir nuevos elementos

myArray = []

// push y pop

myArray.push("Brais")
myArray.push("Moure")
myArray.push("mouredev")
myArray.push(37)

console.log(myArray)

console.log(myArray.pop()) // Elimina el último y lo devuelve
myArray.pop()

console.log(myArray)

// shift y unshift
console.log("SHIFT--------------------------")
console.log(myArray.shift())
console.log(myArray)

console.log("UNSHIFT--------------------------")
myArray.unshift("Brais", "mouredev")
console.log(myArray)

// length = longitud del array

console.log(myArray.length)

// clear: Borrar un array

myArray = []
myArray.length = 0 // alternativa
console.log(myArray)

// slice: Copia el array en otro eligiendo que elementos quieres
console.log("SLICE-------------------------------")
myArray = ["Brais", "Moure", "mouredev", 37, true]

let myNewArray = myArray.slice(1, 3)

console.log(myArray)
console.log(myNewArray)

// splice:
console.log("SPLICE-------------------------------")

myArray.splice(1, 3) //Elimina 3 elementos contando desde el elemento 1 
console.log(myArray)

myArray = ["Brais", "Moure", "mouredev", 37, true]

myArray.splice(1, 2, "Nueva entrada") //Añadirá el elemento "Nueva entrada" después del elemento 1
console.log(myArray)