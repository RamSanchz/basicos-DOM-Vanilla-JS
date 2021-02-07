import saludo, {PI, usuario} from "./constantes.js";// se coloca ./ que indica buscar a partir de la carpeta donde estoy
import {aritmetica as cal} from "./aritmetica.js"; // se les pueden dar alias a las cosas que importas de otros documentos



console.log("archivo modulos.js");
console.log(PI);
console.log(usuario);

console.log(cal.sumar(3,4)); // aqui lo llamamos por el alias 
//saludar();
saludo();
