/*
Clase 5 en vídeo | 07/08/2024
Objetos, desestructuración, propagación y clases
https://www.youtube.com/live/SBXEpAx_y_Q?si=Sbqqa2-_eGwsUkH-&t=958
*/

// 1. Crea un objeto con 3 propiedades
let coche = {
    modelo: "Audi",
    puertas: 5,
    color: "plata"
}

// 2. Accede y muestra su valor
console.log(`El coche de Yerai es un ${coche.modelo} de ${coche["puertas"]} puertas de color ${coche.color}`);

// 3. Agrega una nueva propiedad
coche.cilindrada = "1.8V";
console.log(`El coche de Yerai es un ${coche.modelo} ${coche.cilindrada} de ${coche["puertas"]} puertas de color ${coche.color}`);

// 4. Elimina una de las 3 primeras propiedades
delete coche.color;
console.log(`El coche de Yerai es un ${coche.modelo} ${coche.cilindrada} de ${coche["puertas"]} puertas de color ${coche.color}`);

// 5. Agrega una función e invócala
coche.velocidad = function() {
    console.log("El coche está en marcha");
}

// 6. Itera las propiedades del objeto, itera las claves no los valores
console.log("Las propiedades del coche son estas: ");
for (let key in coche) {
    console.log(key + ": " + coche[key]);
}

// 7. Crea un objeto anidado
let person = {
    name: "Alice",
    age: 54,
    sex: "female",
    walk: function () {
        console.log(`${this.name} camina`);
    },
    job: {
        name: "QA Analyst",
        experience: 4, 
        work: function () {
            console.log(`${this.name} trabaja`);
        }
    }
}

console.log(person);

// 8. Accede y muestra el valor de las propiedades anidadas
console.log(person.job.name + " con " + person.job.experience + " años de experiencia");
person.job.work();

//9. Comprueba si los dos objetos creados son iguales
let coche2 = {
    modelo: "Audi",
    puertas: 5,
    color: "plata"
}

console.log(coche);
console.log(coche2);
console.log(coche == coche2); //false

// 10. Comprueba si dos propiedades diferentes son iguales
console.log(coche.modelo == coche2.modelo); //true

