import promptSync from 'prompt-sync';
import { sumar, multiplicar, dividir, restar, } from './calculadora/index.js';
import { isNumber } from './helper/isNumber.js';

const prompt = promptSync();
let a 
let b 

// obtener entrada del usuario
do {
a = parseInt(prompt("Ingrese el valor de a: "));
if (!isNumber(a)){
    continue;
} 
 b = parseInt(prompt("Ingrese el valor de b: "));
 if (!isNumber(b)){
    continue;
 }
} while(true);


// while (true){
// b = parseInt(prompt("Ingrese el valor de b: "));
// if (!isNumber(b)){
//     continue;
// }
// break;
// }



let resultado = sumar (a, b);
let producto = multiplicar(a, b)
let cociente = dividir(a, b);
let residuo = restar (a, b);

console.log (resultado);
console.log (producto);
console.log (cociente);
console.log (residuo);


