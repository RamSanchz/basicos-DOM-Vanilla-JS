export const PI = Math.PI;


// si no colocas export no seran exportadas, por lo tanto solo puedes exportar lo que vayas a ocupar 
export let usuario = "Ram";
let password = "1234567";

export  function saludar (){// default quiere decir que se importara automaticamente, pero no puede haber mas de 1 por documento y solo se puede hacer asi con las funciones definidas y las clases
    console.log("Hola módulos +ES6");
}

//con las variables const , let y funciones declaradas primero deben crearse y debajo exportarse por default ya que estas funcionan por bloque


const saludo = () => console.log("Hola soy una funcion con saludo");
export default saludo;
