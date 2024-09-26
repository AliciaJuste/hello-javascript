/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Concatena dos cadenas de texto
let cadena1 = "Hola que tal "
let cadena2 = "estás"
let frase = cadena1 + cadena2
console.log("Frase:" + frase)

// 2. Muestra la longitud de una cadena de texto
console.log(frase.length)

// 3. Muestra el primer y último carácter de un string
console.log(frase[0])
console.log(frase[frase.length-1])

// 4. Convierte a mayúsculas y minúsculas un string
console.log(frase.toUpperCase())
console.log(frase.toLowerCase())

// 5. Crea una cadena de texto en varias líneas
let cadenaMultiple = `Esta es
una cadena
de texto
de varias
lineas`

console.log(cadenaMultiple)

// 6. Interpola el valor de una variable en un string
let email = "lisgreen@gmail.com"
console.log(`${frase}! Bienvenida ${email}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(frase.replace(" ", "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(frase.indexOf("que"))
console.log(frase.includes("que"))

console.log(frase.slice(0,4))

// 9. Comprueba si dos strings son iguales
let cadenaA = "hola"
let cadenaB = "hola"
let cadenaC = "Hola"
 
console.log(cadenaA == cadenaB)
console.log(cadenaA == cadenaC)


// 10. Comprueba si dos strings tienen la misma longitud
console.log(cadenaA.length == cadenaB.length)
