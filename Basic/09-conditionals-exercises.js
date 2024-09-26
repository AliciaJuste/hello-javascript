/*
Clase 3 en vídeo | 24/07/2024
Condicionales, arrays y sets
https://www.twitch.tv/videos/2206228701?t=00h16m02s
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
nombre = "Alice"
if (nombre == "Alice") {
    console.log("Mi nombre es " + nombre)
} else {
    console.log("No hay nombre asignado")
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
user = "lisgreen"
password = 123456

if (user == "lisgreen" && password == 123456) {
    console.log("El usuario " + user + " es correcto")
} else {
    console.log("El usuario o el password no son correctos")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
numeroPositivo = 5
numeroNegativo = -4
numeroCero = 0

numero = numeroPositivo
//numero = numeroNegativo
//numero = numeroCero

if (numero > 0) {
    console.log("El numero " + numero + " es positivo")
} else if (numero < 0) {
    console.log("El numero " + numero + " es negativo")
} else {
    console.log("El numero " + numero + " es CERO")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
edadUsuario = 19

if (edadUsuario >= 18) {
    console.log("El usuario es mayor de edad y puede votar")
} else {
    console.log("El usuario es menor de edad y no puede votar.\nLe faltan " + (18-edadUsuario) + " año/s para votar")
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
edadUsuario = 12
let esAdulto = edadUsuario >=  18 ? "adulto" : "menor"
console.log("El usuario es " + esAdulto)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = 4

if (mes == 1 || mes == 2 || mes == 12) {
    estacion = "invierno"
} else if (mes == 3 || mes == 4 || mes == 5) {
    estacion = "primavera"
} else if (mes >= 6 && mes <= 8) {
    estacion = "verano"
} else if (mes >= 9 && mes <= 11) {
    estacion = "otoño"
}
console.log("El mes de " + mes + " pertenece a la estación de " + estacion)

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) {
    diasMes = 31
} else if (mes == 2) {
    diasMes = 28
} else {
    diasMes = 30
}

console.log("El mes " + mes + " tiene " + diasMes + " días")

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
idioma = "English"

switch(idioma) {
    case "Spanish": mensaje = "Hola, ¿que tal como estás?"
                    break
    case "English": mensaje = "Hi, how are you?"
                    break
    case "Catalan": mensaje = "Hola, ¿que tal com estàs?"
                    break
    case "French":  mensaje = "Bonjour, comment allez-vous?"
                    break
}
console.log(mensaje)

// 9. Usa un switch para hacer de nuevo el ejercicio 6
mes = 7
switch(mes) {
    case 1:
    case 2: estacion = "invierno"
            break
    case 3: 
    case 4:
    case 5: estacion = "primavera"
            break
    case 6:
    case 7:
    case 8: estacion = "verano"
            break
    case 9:
    case 10:
    case 11: estacion = "otoño"
             break
    case 12: estacion = "invierno"
             break
}
console.log("El mes de " + mes + " pertenece a la estación de " + estacion)

// 10. Usa un switch para hacer de nuevo el ejercicio 7
mes = 9
switch(mes) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12: diasMes = 31
             break
    case 2:  diasMes = 28
             break
    case 4:
    case 6:
    case 9:
    case 11: diasMes = 30
             break
}
console.log("El mes de " + mes + " tiene " + diasMes + " días")
