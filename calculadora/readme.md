Proyecto Calculadora en JavaScript

1. Objetivo del Proyecto

El objetivo de este proyecto fue desarrollar una calculadora modular en JavaScript capaz de realizar operaciones matemáticas básicas.

Las operaciones implementadas fueron:

- Suma
- Resta
- Multiplicación
- División

El programa debía solicitar dos números al usuario, validar que fueran correctos y posteriormente ejecutar las operaciones matemáticas.

Se trabajó utilizando Node.js, modularización y separación de archivos.
--

Primeros errores encontrados: 

Como era una calculadora que solo iba a recibir números no podía aceptar caracteres diferentes como texto, por ende, se implementó un archivo por separado llamado isNumber.js para validar en un bloque de código que lo que ingresara el usuario fuera tipo numérico.

Dado esta implementación en el proyecto, se exporto y se importó en el index principal para poder utilizarlo en las condicionales de validación

---

2. Estructura del Proyecto

Se organizó el proyecto de la siguiente manera:

calculadora/
│
├── dividir.js
├── multiplicar.js
├── sumar.js
├── resta.js
├── index.js
│
├── helper/
│   ├── index.js
│   └── isNumber.js
│
├── package.json
└── node_modules/

Esta estructura permite mantener el código organizado y facilita el mantenimiento del proyecto.

---

3. Archivos de Operaciones Matemáticas

Cada operación fue creada en un archivo independiente como buena práctica de manejo de funciones.

sumar.js

export function sumar(a,b){
    return a+b;
}

Función:

Recibe dos números y retorna la suma de ambos.

Ejemplo:

sumar(2,3)

Resultado:

5
Con export, permite exportar la función para luego importarla en el index.js principal 

---

resta.js

export function restar(a,b){
    return a-b;
}

Función:

Recibe dos números y retorna la resta.

---

multiplicar.js

export function multiplicar(a,b){
    return a*b;
}

Función:

Recibe dos números y retorna la multiplicación.

---

dividir.js

export function dividir(a,b){
    return a/b;
}

Función:

Recibe dos números y retorna la división.

Ejemplo:

dividir(10,2)

Resultado:

5

---

4. Archivo de Validación (isNumber.js)

Este archivo permite verificar que el usuario solo ingrese números válidos.

Código:

export const isNumber = (element) => {
    const patron = /^\d+$/;
    return (patron.test(element)) ? true : false
}
Línea 1

export const isNumber = (element) =>

Se crea una función llamada isNumber.

El parámetro element representa el dato recibido.

---

Línea 2

const patron = /^\d+$/

Se define una expresión regular.

Significado:

^   = inicio
\d  = dígitos del 0 al 9
+   = uno o más caracteres
$   = final

Solo permite números enteros positivos.

Ejemplos válidos:

12
45
300

Ejemplos inválidos:

hola
abc
12a
-5

---

Línea 3

return patron.test(element)

Se utiliza el método ".test()" para comprobar si cumple el patrón.

Si cumple:

true

Si no cumple:

false

---

5. Archivo Principal (index.js)

Este archivo controla el flujo principal del programa.

Aquí se importan todas las funciones necesarias.

Pero estando en proceso de la creación de lo que ingresaba el usuario, ocurrían muchos errores al momento de implementar el bucle repetitivo o las condicionales, porque antes de ello, no existía el archivo de validación isNumber.js, y al momento de ingresar y validar ya que, si se ingresaba números bien, pero si se ingresaba texto se generaba error en la consola.


Ejemplo:

import promptSync from 'prompt-sync';
import { sumar, multiplicar, dividir, restar, } from './calculadora/index.js';
import { isNumber } from './helper/isNumber.js';

Aquí importamos lo que habíamos exportado en los archivos anteriores y separados donde se realizaban las operaciones matemáticas.

Con el import de la línea 3, importamos todos los archivos de las operaciones, se le agrega el from para indicarle que son otros archivos creados por separados y se define la ruta donde fueron creados.

Luego se hace el mismo procedimiento para la importación del archivo isNumber.js.

O de la manera menos simplificada:

import { sumar } from "./sumar.js";
import { restar } from "./resta.js";
import { multiplicar } from "./multiplicar.js";
import { dividir } from "./dividir.js";
import { isNumber } from "./helper/isNumber.js";

Explicación

La instrucción import permite utilizar funciones creadas en otros archivos.

---

6. Entrada de Datos

El usuario debe ingresar dos valores.

Código:

a = parseInt(prompt("Ingrese el valor de a"));

Explicación

prompt()

Solicita información al usuario.

Ejemplo:

Ingrese el valor de a:

---

parseInt()

Convierte texto a número entero.

Ejemplo:

"25"

Se convierte en:

25

---

7. Validación de Datos

Después de ingresar el dato se valida.

Código:

if (!isNumber(a)){
    continue;
}

Explicación

El símbolo:

!

Significa negación (NOT).

Si el dato no es un número:

continue

Hace que el ciclo vuelva a comenzar.

Ejemplo:

Usuario escribe:

hola

Entonces:

isNumber("hola")

Retorna:

false

Y el programa vuelve a solicitar datos.

---

8. Ciclo do while

Se utilizó un ciclo repetitivo.

Código:

do{

   a = parseInt(prompt(...));

   if(!isNumber(a)){
      continue;
   }

   b = parseInt(prompt(...));

   if(!isNumber(b)){
      continue;
   }

}while(true)

Explicación

El ciclo:

while(true)

Significa repetirse infinitamente.

Mientras sea verdadero continuará ejecutándose.

---

9. Problema Detectado

Actualmente el programa presenta un error.

Código:

}while(true);

El problema es que la condición siempre es verdadera.

Esto genera un bucle infinito.

Flujo:

entra → ejecuta → vuelve a entrar → ejecuta → vuelve a entrar

Nunca termina.

---

10. Solución del Problema

Se debe utilizar la instrucción "break".

Código corregido:

do{

   a = prompt("Ingrese a: ");

   if(!isNumber(a)){
      continue;
   }

   b = prompt("Ingrese b");

   if(!isNumber(b)){
      continue;
   }

   break;

}while(true);

Explicación

Cuando ambos datos son correctos:

break;

Rompe el ciclo y permite continuar con el programa.

---

11. Ejecución de Operaciones

Después de salir del ciclo se ejecutan las operaciones.

Código:

let resultado = sumar(a,b);
let producto = multiplicar(a,b);
let cociente = dividir(a,b);
let residuo = restar(a,b);

Ejemplo:

a = 10
b = 5

Resultados:

15
50
2
5

---

12. Mostrar Resultados

Se imprimen en consola.

Código:

console.log(resultado);
console.log(producto);
console.log(cociente);
console.log(residuo);

Salida esperada:

15
50
2
5

---

13. Conceptos Aprendidos

Durante el desarrollo del proyecto en la clase se trabajaron conceptos fundamentales de programación.

Funciones

Que permiten reutilizar bloques de código.

Ejemplo:

function sumar()

---

Modularización

Consiste en dividir el proyecto en archivos independientes.

Ventajas:

- Código más limpio
- Fácil mantenimiento
- Mayor organización

---

Import y Export

Permiten compartir funciones entre archivos.
- export
- import

---

Expresiones Regulares

Sirven para validar patrones.

Ejemplo:

/^\d+$/

---

Condicionales

Permiten tomar decisiones.

if

---

Ciclos

Permiten repetir instrucciones.

do while

---

continue

Salta a la siguiente iteración.

continue

---

break

Detiene completamente un ciclo.

break

---
14. Instalación del Proyecto con Node.js

Para poder desarrollar la calculadora fue necesario inicializar un proyecto con Node.js.

Se utilizó el siguiente comando en la terminal:

- npm init -y
- Explicación

Este comando crea automáticamente el archivo:
package.json
Este archivo contiene la configuración principal del proyecto, como:

- Nombre del proyecto
- Versión
- Dependencias instaladas
- Scripts de ejecución

Ejemplo

{
  "name": "calculadora",
  "version": "1.0.0"
}
---

15. Instalación de Dependencias (node_modules)

Para que el proyecto funcionara correctamente fue necesario instalar librerías externas.

Cuando se instala una dependencia, Node.js crea automáticamente la carpeta:

node_modules/

En esta carpeta se almacenan todas las librerías necesarias para ejecutar el proyecto.

En este proyecto se generaron las siguientes carpetas:

node_modules
│
├── ansi-regex
├── prompt-sync
└── strip-ansi

Función de node_modules

La carpeta node_modules sirve para almacenar todas las dependencias del proyecto.

No es recomendable modificar estos archivos manualmente.

---

16. Instalación de prompt-sync

Para poder recibir datos desde la consola fue necesario instalar la librería:

prompt-sync

Se puede instalar utilizando:

npm install prompt-sync

Después de ejecutar este comando, Node.js realiza automáticamente las siguientes acciones:

- Descarga la librería
- Crea la carpeta node_modules
- Actualiza package.json
- Actualiza package-lock.json

---

17. Uso de prompt-sync para recibir datos por consola

En JavaScript normalmente la función:

prompt()

funciona en navegadores, pero no en Node.js.

Para solucionar esto se utilizó la librería:

prompt-sync

Primero se importa de la siguiente manera:

const prompt = require("prompt-sync")();

Explicación por linea
const
Declara una variable constante.
---
require()

Permite importar módulos externos instalados dentro de Node.js.

Ejemplo:

require("prompt-sync")

Node.js busca automáticamente la librería dentro de:

node_modules/
---
("prompt-sync")

Indica qué paquete se debe cargar.
---
()

Ejecuta inmediatamente la función.
---
Ejemplo de uso:

let nombre = prompt("Ingrese su nombre: ");

Si el usuario escribe:
Jose

La variable almacenará:

nombre = "Jose"

---

18. Importación de Módulos que ya fue explicada antes

En este proyecto cada operación matemática fue separada en archivos independientes.

Para utilizar esas funciones se utilizó la palabra reservada:
Import

Ejemplo:
- import { sumar } from "./calculadora/sumar.js";
- import { restar } from "./calculadora/resta.js";
- import { multiplicar } from "./calculadora/multiplicar.js";
- import { dividir } from "./calculadora/dividir.js";
- import { isNumber } from "./helper/isNumber.js";

Explicación

La instrucción:

import
permite traer funciones creadas en otros archivos.

Ejemplo:
import { sumar }

Significa:
- Traer la función sumar desde otro archivo

La ruta:

"./calculadora/sumar.js"

significa:

- Buscar dentro de la carpeta calculadora el archivo sumar.js

---

19. Dependencias Internas Instaladas

Durante la instalación de prompt-sync aparecieron automáticamente otras carpetas dentro de 
node_modules.
Ejemplo:

- ansi-regex
- strip-ansi
- prompt-sync

Esto sucede porque una librería puede depender internamente de otras librerías.

Node.js instala automáticamente esas dependencias adicionales.

---

21. Conclusión

Este proyecto permitió desarrollar una calculadora modular en JavaScript utilizando Node.js.

Se aplicaron conceptos importantes como:

- Funciones
- Modularización
- Importación y exportación de archivos
- Validación de datos
- Expresiones regulares
- Condicionales
- Ciclos repetitivos

El principal error encontrado fue un bucle infinito generado por la instrucción:

while(true)

La solución consistió en implementar "break" para finalizar el ciclo cuando la validación fuera correcta.

Este ejercicio permitió comprender una estructura de proyecto más cercana a un desarrollo profesional.
