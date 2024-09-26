/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.twitch.tv/videos/2212289583?t=00h17m45s
*/

// 1. Crea un array que almacene cinco animales
let animales = ["gato", "perro", "loro", "hamster", "iguana"]

// 2. Añade dos más. Uno al principio y otro al final
animales.unshift("tigre")
animales.push("murcielago")
console.log("Animales = " + animales)

// 3. Elimina el que se encuentra en tercera posición
console.log("Animal en 3ª posision: " + animales[2])
animales.splice(2,1)
console.log("Animales = " + animales)

// 4. Crea un set que almacene cinco libros
let setLibros = new Set(["El señor de los anillos", "Memorias de una Geisha", "Olvidado rey Gudu", "Stonehenge", "El hobbit"])
console.log(setLibros)

// 5. Añade dos más. Uno de ellos repetido. No admite repetidos!
setLibros.add("Azteca")
setLibros.add("El hobbit")
console.log(setLibros)

// 6. Elimina uno concreto a tu elección
setLibros.delete("Olvidado rey Gudu")
console.log(setLibros)

// 7. Crea un mapa que asocie el número del mes a su nombre
let miMapa = new Map([
                    [1, "Enero"],
                    [2, "Febrero"],
                    [3, "Marzo"],
                    [4, "Abril"],
                    [5, "Mayo"],
                    [6, "Junio"],
                    [7, "Julio"],
                    [8, "Agosto"],
                    [9, "Septiembre"],
                    [10, "Octubre"],
                    [11, "Noviembre"],
                    [12, "Diciembre"]
])
console.log(miMapa)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
if (miMapa.has(5)) {
    console.log("El mes 5 se corresponde a el mes de " + miMapa.get(5))
} else {
    console.log("El mes 5 no existe")
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano
miMapa.set("Verano",["Junio", "Julio", "Agosto"])
console.log("Los meses de verano son " + miMapa.get("Verano"))

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let myArray = ["calabacin", "huevo", "aceite", "sal"]
let mySet = new Set(myArray)
console.log(mySet)
let myMap = new Map()
myMap.set("ingredientes", mySet)
console.log(myMap)
