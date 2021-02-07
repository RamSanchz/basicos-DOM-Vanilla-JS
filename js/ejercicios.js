/*1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
 */
/*
function contarCaracteres (cadena = ""){
    if(!cadena) {
        console.warn("no ingresaste ninguna cadena");
    } else {
        console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres.`)
    }
}
contarCaracteres();
contarCaracteres("Hola mundo");
*/
const contarCaracteres = (cadena = "") =>
  !cadena
    ? console.warn("no ingresaste ninguna cadena")
    : console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres.`);

contarCaracteres();
contarCaracteres("Hola mundo");

/*
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
*/

const recortarTexto = (cadena = "", longitud = undefined) =>
  !cadena
    ? console.warn("no ingresaste la cadena")
    : longitud === "undefined"
    ? console.warn("no ingresaste la longitud para recortar el texto")
    : console.log(cadena.slice(0, longitud));

recortarTexto("heee");
recortarTexto("Hola mundo", 6);

/*
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
*/

const cadenaAArreglo = (cadena = "", separador = undefined) =>
  !cadena
    ? console.warn("no ingresaste la cadena")
    : separador === undefined
    ? console.warn("no ingresaste el separador")
    : console.info(cadena.split(separador));

cadenaAArreglo("Lorem ipsumm 1 2 3 ", " ");
cadenaAArreglo("Ene, Feb, Mar", ",");
cadenaAArreglo("", " ");
cadenaAArreglo("1,2,3");

/*
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.*/

const repetirTexto = (texto = "", veces = undefined) => {
  if (!texto) return console.warn("No ingresaste un texto");

  if (veces === undefined)
    return console.warn("No ingresaste el número de veces a repetir el texto");

  if (veces === 0)
    return console.error("El número de veces a repetir no puede ser 0");

  if (Math.sign(veces) === -1)
    return console.error("El número de veces no puede ser negativo");

  for (let i = 1; i <= veces; i++) {
    console.info(`${texto}, ${i}`);
  }
};

repetirTexto("Hola mundo", 3);
repetirTexto("Hola mundo", 0);
repetirTexto("Hola mundo", -20);
repetirTexto("", 3);
repetirTexto("Hola mundo");

console.clear();

/*
5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
*/

const palabrasInvertidas = (cadena = "") =>
  !cadena
    ? console.warn("no has ingresado una cadena")
    : console.info(cadena.split("").reverse().join("")); // split separa las cadenas en arreglos de caractceres, reverse uinvierte el orden dentro de los arreglos y el join vuelve a convertir ese arreglo a una cadena de nuevo toda junta

palabrasInvertidas("");
palabrasInvertidas("Hola Mundo");

/*
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
*/

const palabraRepetida = (cadena = "", palabra = "") => {
  if (!cadena) return console.warn("No ingresaste la cadena de texto");
  if (!palabra) return console.warn("No ingresaste la palabra a verificar");

  let i = 0,
    contador = 0;
  while (i !== -1) {
    i = cadena.indexOf(palabra, i); // indexOf sirve para buscar una palabra dentro de una cadena de texto, si la encuentra devuelve la posicion, si no la encuentra devuelve -1
    if (i !== -1) {
      i++;
      contador++;
    }
  }

  return console.info(`La palabra ${palabra} se repite ${contador} veces`);
};

palabraRepetida();
palabraRepetida("perros larogs");
palabraRepetida("Hola como te encuentras el dia como hoy", "ram");

/*
7) Programa una función que valide si una palabra o frase dada, es un palíndromo (es una palabra que se lee al reves y tiene el mismo significado, que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
*/

const palindromo = (palabra = "") => {
  if (!palabra) return console.warn("No ingresaste una palabra o frase");

  palabra = palabra.toLowerCase(); // JS es sensible a mayusculas y minusculas
  let alReves = palabra.split("").reverse().join("");

  return palabra === alReves
    ? console.info(
        `Sí, si es palíndromo, Palabra original ${palabra}, Palabra al revés ${alReves}.`
      )
    : console.info(
        `No, no es palíndromo, Palabra original ${palabra}, Palabra al revés ${alReves}.`
      );
};

palindromo("");
palindromo("Hola Mundo");
palindromo("Salas");

//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const eliminarCaracteres = (texto = "", patron = "") => {
  !texto
    ? console.warn("no ingresaste un texto")
    : !patron
    ? console.warn("No ingresaste un patron de caracteres")
    : console.info(texto.replace(new RegExp(patron, "ig"), "")); // replace sirve para remplazar valores en una cadena de texto(lo que se busca(Colocamos una expresion regular que buscara el patron en toda la cadena), por lo que se va a remplazar(en este caso por nada)), al declarar una exprsion regular te va a permitir pasar como patron otra expresion regular y si lo va a valer
};

eliminarCaracteres("");
eliminarCaracteres("Hola Hola Hola");
eliminarCaracteres("xyz0 xyz1 xyz2", "xy");

console.clear();

//9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

const aleatorio = () => console.info(Math.round(Math.random() * 100) + 500);

aleatorio();

//10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const capicua = (numero = 0) => {
  if (!numero) return console.warn("no ingresaste un número");

  if (typeof numero !== "number")
    return console.error(`El valor ${numero} no es un número.`);

  numero = numero.toString();
  let alReves = numero.split("").reverse().join("");

  return numero === alReves
    ? console.info(
        `Si, si es capícua, Número original ${numero}. Número al reves ${alReves}.`
      )
    : console.info(
        `No, no es capícua, Número original ${numero}. Número al reves ${alReves}.`
      );
};

capicua();
capicua("2345");
capicua([]);
capicua(23456);
capicua(2002);

//11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

const factorial = (numero = undefined) => {
  if (numero === undefined) return console.warn("No escribiste ningun número");

  if (typeof numero !== "number")
    return console.error(`El valor ${numero} no es un número.`);

  if (numero === 0) return console.error(`El número no puede ser 0`);

  if (Math.sign(numero) === -1)
    return console.error(`El número no puede ser negativo`);

  let factorial = 1;

  for (let i = numero; i > 1; i--) {
    factorial *= i;
  }

  return console.info(`El factorial de ${numero} es ${factorial}`);
};

factorial();
factorial("12");
factorial(0);
factorial(-5);
factorial([1, 2, 3]);
factorial(5);

console.clear();

//12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const numeroPrimo = (numero = undefined) => {
  if (numero === undefined) return console.warn("No escribiste ningun número");

  if (typeof numero !== "number")
    return console.error(`El valor ${numero} no es un número.`);

  if (numero === 0 || numero === 1)
    return console.error(`El número no puede ser 0 ó 1`);

  if (Math.sign(numero) === -1)
    return console.error(`El número no puede ser negativo`);

  let divisible = false;

  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      divisible = true;
      break;
    }
  }

  return divisible
    ? console.log(`El número ${numero}, No es primo.`)
    : console.log(`El número ${numero}, Sí es primo`);
};

numeroPrimo();
numeroPrimo(0);
numeroPrimo(1);
numeroPrimo(-200);
numeroPrimo("234");
numeroPrimo([1, 2, 3]);
numeroPrimo(200);
numeroPrimo(5);

//13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const parImpar = (numero = undefined) => {
  if (numero === undefined) return console.warn("No escribiste ningun número");

  if (typeof numero !== "number")
    return console.error(`El valor ${numero} no es un número.`);

  return numero % 2 === 0
    ? console.log(`El número ${numero}, Si es par.`)
    : console.log(`El número ${numero}, No es par`);
};
parImpar();
parImpar(0);
parImpar(1);
parImpar(-200);
parImpar("234");
parImpar([1, 2, 3]);
parImpar(200);
parImpar(5);

//14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const celsiusFaharenheit = (grados = undefined, unidad = undefined) => {
  if (grados === undefined)
    return console.warn("No escribiste grados a convertir.");

  if (typeof grados !== "number")
    return console.error(`El valor ${grados} no es un número.`);

  if (unidad === undefined)
    return console.warn("No escribiste el tipo de grado a convertir");

  if (typeof unidad !== "string")
    return console.error(`El valor ${unidad} no es un texto.`);

  if (unidad.length !== 1 || !/(C|F)/.test(unidad))
    return console.warn("Valor invalido, no escribiste F° ó C°");

  if (unidad === "C") {
    return console.info(`${grados}°C = ${Math.round(grados * (9 / 5) + 32)}°F`);
  } else {
    return console.info(
      `${grados}°F = ${Math.round((grados - 32) * (5 / 9))}°C`
    );
  }
};

celsiusFaharenheit();
celsiusFaharenheit("2");
celsiusFaharenheit(2, true);
celsiusFaharenheit(0, "hola");
celsiusFaharenheit(100, "E");
celsiusFaharenheit(100, "C");
celsiusFaharenheit(100, "F");

console.clear();

//15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

const convertirBinarioDecimal = (numero = undefined, base = undefined) => {
  if (numero === undefined)
    return console.warn("No ingresaste un número a convertir.");

  if (typeof numero !== "number")
    return console.error(`El valor ${numero} no es un número.`);

  if (base === undefined)
    return console.warn("No ingresaste una base a convertir.");

  if (typeof base !== "number")
    return console.error(`El valor ${base}  de la base no es un número.`);

  if (base === 2) {
    return console.info(
      `${numero} base ${base} = ${parseInt(numero, base)} base 10`
    ); // el parseInt tambien permite hacer conversiones de binario a decimal solo pasandole un segundo parametro que representa la base de la cual viene el número
  } else if (base === 10) {
    return console.info(
      `${numero} base ${base} = ${numero.toString(2)} base 2`
    ); // el metodo toString permite convertir de decimal a binario, solo pasandole la base como parametro (2-- esta es la base del binario) a la que se desea convertir (puede ser hexa u octa)
  } else {
    return console.warn("De momento solo se aceptan base 2 y base 10");
  }
};

convertirBinarioDecimal();
convertirBinarioDecimal("2", 2);
convertirBinarioDecimal(100);
convertirBinarioDecimal(100, "2");
convertirBinarioDecimal(101, 2);
convertirBinarioDecimal(1111111000000101, 2);
convertirBinarioDecimal(65029, 10);
convertirBinarioDecimal(101, 3);

//16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

const descuento = (monto = undefined, descuento = 0) => {
  if (monto === undefined) return console.warn("Debes ingresar un monto");

  if (monto === 0) return console.error("El monto no puede ser 0");

  if (typeof monto !== "number")
    return console.error(`El valor ${monto} no es un número`);

  if (typeof descuento !== "number")
    return console.error(
      `El valor ${descuento} para el descuento no es un número`
    );

  if (Math.sign(monto) === -1)
    return console.error(`El valor ${monto} del monto no puede ser negativo`);

  if (Math.sign(descuento) === -1)
    return console.error(
      `El valor ${descuento} del descuento no puede ser negativo`
    );

  if (descuento > 100)
    return console.error(
      `El valor ${descuento} del descuento no puede ser mayor a 100`
    );

  return console.info(
    `Se aplico ${descuento}% de descuento a tu monto de $${monto}, el monto con descuento es $${
      monto - (monto * descuento) / 100
    }`
  );
};

descuento();
descuento(500);
descuento(0, 50);
descuento("1000", 50);
descuento(1000, "50");
descuento(-100, 20);
descuento(100, -20);
descuento(100, 150);
descuento(1000, 20);
descuento(2000, 50);

console.clear();

//17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

const calcularAnios = (fecha = undefined) => {
  if (fecha === undefined) return console.warn("No ingresaste la fecha.");

  if (!(fecha instanceof Date))
    return console.error("El valor que ingresaste no es una fecha valida"); // instanceof sirve para hacer comparaciones entre cosas del mismo tipo (arreglos, objetos, objeto-date , etc) ya que compara la manera de instanciarlo

  let hoyMenosFecha = new Date().getTime() - fecha.getTime();
  // get time obtiene los milisegundos transcurridos de 1 de enero de 1970  hasta la actualidad, (en la parte de fecha.getTime() se obtienen los milisegundos transcurridos de 1 de enero de 1970 hasta la fecha dada), despues se restan para obtener la diferencia, solo que esta en milisegundos y hay que convertirla aun a años

  let aniosEnMs = 1000 * 60 * 60 * 24 * 365; // obtenemos los milisegundos que equivalen a 1 año (1000 en js equivale a 1 segundo) * 60(que son los segundos que tiene 1 minuto) * 60 (que son los minutos que tiene una hora) * 24(que son las horas que tiene un dia) * 365 (que son los dias que tiene un año) --- si se quisiera obtener algo diferente de años solo se deja hasta la multiplicacion que corresponde a cada tiempo (1000 * 60 * 60) hasta aqui se queda en horas

  let aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMs); // aqui obtenemos los años

  return Math.sign(aniosHumanos) === -1
    ? console.info(
        `Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}.`
      )
    : Math.sign(aniosHumanos) === 1
    ? console.info(
        `Han pasado ${Math.abs(aniosHumanos)} desde el ${fecha.getFullYear()}.`
      )
    : console.info(`Estamos en el año actual ${fecha.getFullYear()}.`);

  // usamos .sing para saber si nos pasamos o aun no llegamos a la fecha para asi poder validar de mejor manera
};

calcularAnios();
calcularAnios({});
calcularAnios([]);
calcularAnios(true);
calcularAnios(new Date());
calcularAnios(new Date(1996, 03, 10));
calcularAnios(new Date(2000, 06, 17));
calcularAnios(new Date(2084, 03, 10));

console.clear();

//18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

const contarLetras = (cadena = "") => {
  if (!cadena) return console.warn("No ingresaste ninguna cadena de texto");

  if (typeof cadena !== "string")
    return console.warn(
      `El valor ${cadena} ingresado , No es una cadena de texto.`
    );

  let vocales = 0,
    consonantes = 0;

  cadena = cadena.toLocaleLowerCase();

  for (const letra of cadena) {
    if (/[aeiouáéíóú]/.test(letra)) vocales++;

    if (/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) consonantes++;
  }

  return console.info({
    cadena,
    vocales,
    consonantes,
  });
};

contarLetras();
contarLetras(3);
contarLetras([]);
contarLetras("Hola Mundo");
contarLetras("ñoño");

//19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

const validarNombre = (nombre = "") => {
  if (!nombre) return console.warn("No ingresaste ninguna cadena de texto");

  if (typeof nombre !== "string")
    return console.error(
      `El valor ${nombre} ingresado , No es una cadena de texto.`
    );

  let expReg = /^[A-Za-zÑñÁÉÍÓÚáéíóúÜü\s]+$/g.test(nombre); // el ^ indica que no puede haber nada antes de lo que se va a validar y el $ indica que no puede haber nada después, los [] son agrupadores y el + es para que lo evalue por cada caracter que haya en la cadena de texto y la \s significa espacios en blanco

  return expReg
    ? console.info(`"${nombre}", es un nombre válido`)
    : console.info(`"${nombre}", NO es un nombre válido`);
};

validarNombre();
validarNombre(3);
validarNombre("Ramiro");
validarNombre("Ramiro Sánchez");
validarNombre("Ramiro Sánchez@");

//20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

const validarEmail = (email = "") => {
  if (!email) return console.warn("No ingresaste ninguna email");

  if (typeof email !== "string")
    return console.error(
      `El valor ${email} ingresado , No es una cadena de texto.`
    );

  let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/gi.test(
    email
  );

  return expReg
    ? console.info(`"${email}", es un email correcto`)
    : console.info(`"${email}", NO es un email correcto`);
};

validarEmail();
validarEmail(3);
validarEmail("Ramiro");
validarEmail("Ramiro,Sánchez@gmail");
validarEmail("RamiroSánchez@gmail.com");

console.clear();

// Fusion 19-20

const validarPatron = (cadena = "", patron = "") => {
  if (!cadena) return console.warn("No ingresaste ninguna cadena");

  if (typeof cadena !== "string")
    return console.error(
      `El valor ${cadena} ingresado , No es una cadena de texto.`
    );

  if (!patron) return console.warn("No ingresaste ningun patron a evaluar");

  if (typeof patron !== "string")
    return console.error(
      `El valor ${patron} ingresado , No es una cadena de texto.`
    );

  let expRegEmail = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/gi.test(
    cadena
  );

  let expRegNombre = /^[A-Za-zÑñÁÉÍÓÚáéíóúÜü\s]+$/g.test(cadena);

  if (patron === "email") {
    return expRegEmail
      ? console.info(`"${cadena}", es un email correcto`)
      : console.warn(`"${cadena}", NO es un email correcto`);
  }

  if (patron === "nombre") {
    return expRegNombre
      ? console.info(`"${cadena}", es un nombre correcto`)
      : console.warn(`"${cadena}", NO es un nombre correcto`);
  }
};

validarPatron();
validarPatron(3);
validarPatron("Ramiro", "nombre");
validarPatron("Ramiro Sánchez", "nombre");
validarPatron("Ramiro Sánchez@", "nombre");
validarPatron("Ramiro12233@", "email");
validarPatron("Ramiro.Sánchez", "email");
validarPatron("RamiroSánchez@gmail.com", "email");

console.clear();

//21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

const devolverCuadrados = (arr = undefined) => {
  if (arr === undefined)
    return console.warn("no ingresaste un arreglo de números.");

  if (!(arr instanceof Array))
    return console.error("El valor que ingresaste no es un arreglo.");

  if (arr.length === 0) return console.error("El arreglo esta vacío.");

  for (const num of arr) {
    if (typeof num !== "number")
      return console.error(`El valor "${num}" ingresado, No es un número.`);
  }

  const newArr = arr.map((el) => el * el); // map te genera un duplicado de un arreglo (elemento => pasamos el elemento * el elemento)

  return console.info(
    `Arreglo original ${arr}. \nArreglo elevado al cuadrado ${newArr}.`
  );
};

devolverCuadrados();
devolverCuadrados(true);
devolverCuadrados([]);
devolverCuadrados({});
devolverCuadrados([1, 2, 3, "4"]);
devolverCuadrados([1, 2, {}]);
devolverCuadrados([1, 4, 8]);

//22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

const arrMayorMenor = (arr = undefined) => {
  if (arr === undefined)
    return console.warn("no ingresaste un arreglo de números.");

  if (!(arr instanceof Array))
    return console.error("El valor que ingresaste no es un arreglo.");

  if (arr.length === 0) return console.error("El arreglo esta vacío.");

  for (const num of arr) {
    if (typeof num !== "number")
      return console.error(`El valor "${num}" ingresado, No es un número.`);
  }

  return console.info(
    `Arreglo original ${arr} \nValor mayor: ${Math.max(
      ...arr
    )} \nValor menor: ${Math.min(...arr)} `
  ); // se usa ... (spread operator cuando se desea llamar un objeto iterable dentro de una funcion)
};

arrMayorMenor();
arrMayorMenor(false);
arrMayorMenor([]);
arrMayorMenor([1, 2, "3", {}]);
arrMayorMenor([1, 4, 5, 99, -60]);

//23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

const arregloParImpar = (arr = undefined) => {
  if (arr === undefined)
    return console.warn("no ingresaste un arreglo de números.");

  if (!(arr instanceof Array))
    return console.error("El valor que ingresaste no es un arreglo.");

  if (arr.length === 0) return console.error("El arreglo esta vacío.");

  for (const num of arr) {
    if (typeof num !== "number")
      return console.error(`El valor "${num}" ingresado, No es un número.`);
  }

  return console.info({
    pares: arr.filter((num) => num % 2 === 0),
    impares: arr.filter((num) => num % 2 === 1), // filter sirve para buscar o hacer un filtrado a travez de una funcion dentro de los arreglos
  });
};

arregloParImpar();
arregloParImpar({});
arregloParImpar([]);
arregloParImpar([1, 2, 3, "5"]);
arregloParImpar([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

console.clear();

//24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

const ordenarArreglo = (arr = undefined) => {
  if (arr === undefined)
    return console.warn("no ingresaste un arreglo de números.");

  if (!(arr instanceof Array))
    return console.error("El valor que ingresaste no es un arreglo.");

  if (arr.length === 0) return console.error("El arreglo esta vacío.");

  for (const num of arr) {
    if (typeof num !== "number")
      return console.error(`El valor "${num}" ingresado, No es un número.`);
  }

  return console.info({
    arr,
    asc: arr.map((el) => el).sort(), // sort ordena el arreglo de forma ascendiente
    desc: arr
      .map((el) => el)
      .sort()
      .reverse(),
  });
};

ordenarArreglo();
ordenarArreglo("Hola");
ordenarArreglo([]);
ordenarArreglo([1, 2, 3, "hola"]);
ordenarArreglo([7, 5, 7, 8, 6]);

//25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

const quitarDuplicados = (arr = undefined) => {
  if (arr === undefined)
    return console.warn("no ingresaste un arreglo de números.");

  if (!(arr instanceof Array))
    return console.error("El valor que ingresaste no es un arreglo.");

  if (arr.length === 0) return console.error("El arreglo esta vacío.");

  if (arr.length === 1)
    return console.warn("El arreglo debe tener almenos 2 elementos.");

  /*
    esta es una manera usando filter e indexOf que son metodos de los arreglos, pero como usando set es mas optimo se quedo el otro

    return console.info({
        original: arr,
        sinDuplicados: arr.filter((value, index, self) => self.indexOf(value) === index)

    });*/

  return console.info({
    original: arr,
    sinDuplicados: [...new Set(arr)], // el set permite crear un duplicado de un objeto reiterable pero en este no se permite que hayan duplicados, hace el trabajo del fiter e indexof tras bambalinas
  });
};

quitarDuplicados();
quitarDuplicados({});
quitarDuplicados([]);
quitarDuplicados([2]);
quitarDuplicados(["x", 10, "x", 2, 10, true, true]);

//26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

const promedio = (arr = undefined) => {
  if (arr === undefined)
    return console.warn("no ingresaste un arreglo de números.");

  if (!(arr instanceof Array))
    return console.error("El valor que ingresaste no es un arreglo.");

  if (arr.length === 0) return console.error("El arreglo esta vacío.");

  for (const num of arr) {
    if (typeof num !== "number")
      return console.error(`El valor "${num}" ingresado, No es un número.`);
  }

  return console.info(
    arr.reduce((total, num, index, arr) => {
      total += num;
      if (index === arr.length - 1) {
        return `El promedio de ${arr.join(" + ")} es ${total / arr.length}`;
      } else {
        return total;
      }
    })
  );
};

promedio();
promedio({});
promedio([]);
promedio([2, true]);
promedio([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

console.clear();

/* 27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
    - Todos los datos del objeto son obligatorios.
    - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
                7 restantes números.
    - Valida que el título no rebase los 100 caracteres.
    - Valida que el director no rebase los 50 caracteres.
    - Valida que el año de estreno sea un número entero de 4 dígitos.
    - Valida que el país o paises sea introducidos en forma de arreglo.
    - Valida que los géneros sean introducidos en forma de arreglo.
    - Valida que los géneros introducidos esten dentro de los géneros 
                aceptados*.
    - Crea un método estático que devuelva los géneros aceptados*.
    - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
                decimal de una posición.
    - Crea un método que devuelva toda la ficha técnica de la película.
    - Apartir de un arreglo con la información de 3 películas genera 3 
                instancias de la clase de forma automatizada e imprime la ficha técnica 
                de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
*/

class Pelicula {
  constructor({ id, titulo, director, estreno, pais, generos, calificacion }) {
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.estreno = estreno;
    this.pais = pais;
    this.generos = generos;
    this.calificacion = calificacion;

    this.validarIMDB(id);
    this.validarTitulo(titulo);
    this.validarDirector(director);
    this.validarEstreno(estreno);
    this.validarPais(pais);
    this.validarGeneros(generos);
    this.validarCalificacion(calificacion);
  }

  static get listaGeneros() {
    return [
      "Action","Adult","Adventure","Animation","Biography","Comedy","Crime","Documentary","Drama","Family","Fantasy","Film Noir","Game-Show","History","Horror","Musical","Music","Mystery","News","Reality-TV","Romance","Sci-Fi","Short","Sport","Talk-Show","Thriller","War", "Western"];
  }

  static generosAceptados() {
    return console.info(
      `Los generos aceptados son: ${Pelicula.listaGeneros.join(", ")}`
    );
  }

  validarCadena(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacio.`);

    if (typeof valor !== "string")
      return console.error(
        `${propiedad} "${valor}" no es una cadena de texto.`
      );

    return true;
  }

  validarNumero(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacio.`);

    if (typeof valor !== "number")
      return console.error(`${propiedad} "${valor}" no es un número.`);

    return true;
  }

  validarArreglo(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacio.`);

    if (!(valor instanceof Array))
      return console.error(`${propiedad} "${valor}" no es un arreglo.`);

    if (valor.length === 0) return console.error("El arreglo esta vacío.");

    for (const cadena of valor) {
      if (typeof cadena !== "string")
        return console.error(
          `El valor "${cadena}" ingresado, NO es una cadena de texto.`
        );
    }

    return true;
  }

  validarLongitudCadena(propiedad, valor, longitud) {
    if (valor.length > longitud)
      return console.error(
        `${propiedad} "${valor}" excede el número de caracteres permitidos ${longitud}`
      );

    return true;
  }

  validarIMDB(id) {
    if (this.validarCadena("IMDB id", id)) {
      if (!/^([a-z]){2}([0-9]){7}$/.test(id)) {
        // {]indican el numero de caracteres que iran antes de otra validacion
        return console.error(
          `IMDB id "${id}" no es válido, debe tener 9 caracteres, los 2 primeros letras minúsculas, los 7 restantes números `
        );
      }
    }
  }

  validarTitulo(titulo) {
    if (this.validarCadena("Titulo", titulo)) {
      this.validarLongitudCadena("Titulo", titulo, 100);
    }
  }

  validarDirector(director) {
    if (this.validarCadena("Director", director)) {
      this.validarLongitudCadena("Director", director, 50);
    }
  }

  validarEstreno(estreno) {
    if (this.validarNumero("Año de estreno", estreno)) {
      if (!/^([0-9]){4}$/.test(estreno))
        return console.error(
          `Año de estreno "${estreno}" no es válido, debe ser un número de 4 digitos`
        );
    }
  }

  validarPais(pais) {
    this.validarArreglo("Pais", pais);
  }

  validarGeneros(generos) {
    if (this.validarArreglo("Generos", generos)) {
      for (const genero of generos) {
        if (!Pelicula.listaGeneros.includes(genero)) {
          console.error(`Genero(s) incorrectos "${generos.join(", ")}"`);
          Pelicula.generosAceptados();
        }
      }
    }
  }

  validarCalificacion(calificacion) {
    if (this.validarNumero("Calificación:", calificacion))
      return calificacion < 0 || calificacion > 10
        ? console.error(
            `La calificación tiene que estar en un rango entre 0 y 10`
          )
        : (this.calificacion = calificacion.toFixed(1));
  }


  fichaTecnica(){
      console.info(`Ficha Técnica:\nTitulo:"${this.titulo}"\nDirector: "${this.director}"\nAño: "${this.estreno}"\nPaís:"${this.pais.join(" - ")}"\nGeneros:"${this.generos.join(", ")}"\nCalificación:"${this.calificacion}"\nIMDB id:"${this.id}"\n`);
  }

}

const peli = new Pelicula({
    id: "tt1234567",
    titulo: "Titulo de la pelicula",
    director: "Director de la pelicula",
    estreno: 2020,
    pais: ["México", "Francia"],
    generos: ["Action", "Animation"],
    calificacion: 8.888,
  });
  
  peli.fichaTecnica();


console.clear();

const misPelis = [{
    id: "tt1234567",
    titulo: "Titulo de la pelicula",
    director: "Director de la pelicula",
    estreno: 2020,
    pais: ["México", "Francia"],
    generos: ["Action", "Animation"],
    calificacion: 8.888,
  },
  {
    id: "tt1234567",
    titulo: "Titulo de la pelicula",
    director: "Director de la pelicula",
    estreno: 2021,
    pais: ["México", "Francia"],
    generos: ["Action", "Animation"],
    calificacion: 8.888,
  },
  {
    id: "tt1234567",
    titulo: "Titulo de la pelicula",
    director: "Director de la pelicula",
    estreno: 2022,
    pais: ["México", "Francia"],
    generos: ["Action", "Animation"],
    calificacion: 8.888,
  }];

  misPelis.forEach(el => new Pelicula(el).fichaTecnica());


//Pelicula.generosAceptados();

