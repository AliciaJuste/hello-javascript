/*
Clase 5 en vídeo | 07/08/2024
Objetos, desestructuración, propagación y clases
https://www.twitch.tv/videos/2218300512?t=00h17m10s
*/


// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
let animales = ["gato", "perro", "hamster", "iguana"]

let [myValue0, myValue1] = animales;

console.log(myValue0 + " - " + myValue1);

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let [animal0 = 0, animal1 = 0, animal2 = 0, animal3 = 0, animal4 = 0, animal5 = 0] = animales;

console.log(animales);
console.log(animal0 + " - " + animal1 + " - " + animal2 + " - " + animal3 + " - " + animal4 + " - " + animal5);

// 3. Usa desestructuración para extraer dos propiedades de un objeto
let coche = {
    modelo: "Audi",
    puertas: 5,
    color: "plata"
}

let { modelo, puertas, color } = coche
console.log(modelo)
console.log(puertas)
console.log(color)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
let { modelo: modelo1, puertas: puertas1 } = coche
console.log(modelo1)
console.log(puertas1)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
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

let { name: name1, job: { name: jobName} }  = person
console.log(name1 + " - " + jobName)

// 6. Usa propagación para combinar dos arrays en uno nuevo
let animales2 = ["pato", "buitre", "aguila", "paloma"]

let animales3 = [...animales, ...animales2]
console.log(animales3)

// 7. Usa propagación para crear una copia de un array
let animales4 = [...animales]
console.log(animales4)

// 8. Usa propagación para combinar dos objetos en uno nuevo
let personCoche = {...person, ...coche}
console.log(personCoche)

// 9. Usa propagación para crear una copia de un objeto
let person2 = {...person}
console.log(person2)

// 10. Combina desestructuración y propagación

// Desestructuración: extraemos el primer elemento de cada array
let [primerAnimal, segundoAnimal, ...otrosAnimales] = animales;

// Combina ambos arrays usando propagación
let combinados = [...animales, ...animales2];

console.log(`Primer animal: ${primerAnimal}`);
console.log(`Segundo animal: ${segundoAnimal}`);
console.log("Otros animales:", otrosAnimales);
console.log("Animales combinados:", combinados);

// Con objetos -----------------------------------

// Desestructuramos propiedades del objeto 'person'
let { name: personName, age, job } = person;

// Desestructuramos propiedades del objeto 'coche'
let { modelo: modelo2, color: color2 } = coche;

// Combina los dos objetos usando propagación
let combinedObject = { ...person, ...coche };

console.log(`Persona: ${personName}, Edad: ${age}, Trabajo: ${job.name}`);
console.log(`Coche modelo: ${modelo2}, Color: ${color2}`);
console.log("Objeto combinado:", combinedObject);
