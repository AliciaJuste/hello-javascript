/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.youtube.com/live/euVbF1eatEY?si=nHS3QznAlA_C39NK&t=808
*/

// 1. Crea una variable para cada operación aritmética
let a = 2
let b = 6
let suma = a + b
let resta = a - b
let multiplicacion = a * b
let division = a / b
let modulo = b % a
let exponente = a ** b
let aIncremento = a++
let bDecremento = b--

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let miVariable = 0
miVariable += a
miVariable -= a
miVariable *= a
miVariable /= a
miVariable %= a
miVariable **= a

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación
console.log(a < b)
console.log(b >= a)
console.log(a == 3)
console.log(b == "5")
console.log(a === 3)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(a > b)
console.log(a >= b)
console.log(a == 2)
console.log(b == a)
console.log(b === "5")

// 5. Utiliza el operador lógico and
console.log(a > b && b < 10)

// 6. Utiliza el operador lógico or
console.log(a == 2 || b == 5)

// 7. Combina ambos operadores lógicos
console.log(b > a && a === 3 || b == 3)
// 8. Añade alguna negación
console.log(!(a > b && b == 5))

// 9. Utiliza el operador ternario
let isHeating = true
isHeating ? console.log("Hace un calor que te torras") : console.log("Que fresquito se está")

// 10. Combina operadores aritméticos, de comparáción y lógicas
console.log("The result is: " + (a > b || b < a) && a+b )