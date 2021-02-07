console.log(window);
console.log(document);

let texto =
  "Hola Alondra, espero estes bien... te amo mucho vieja tonta.... Arioos";
// los navegadores ya tienen una API que permite al navegador leer algun texto que tu escribas -- este es un narrador de las computadoras

//speechSynthesis.speak(new SpeechSynthesisUtterance(texto)); --- la API speechSynthesis utiliza su metodo speak (Hablar) la cual recibe un parametro new SpeechSynthesisUtterance que recibe a su vez el texto que deseas
const hablar = () => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

//hablar(); // solo falta mandar a llamar la funcion para que se ejecute el texto

console.log("********* Elementos del Documento **************");

console.log(window.document); // accedemos al dom que es el documento html
console.log(document); // se puede usar sin el window
console.log(document.head); // accedemos al head del documento
console.log(document.body); //accedemos al body
console.log(document.documentElement); //accedemos a la etiqueta HTML pero sin el tipo de documeto
console.log(document.doctype); // accedemos al tipo de documento
console.log(document.charset); //accedemos al tipo de caracter que usamos
console.log(document.title); // accedemos al titulo del documento

// aunque estos aparecen en la consola como si fueran arreglos no lo son  ya que el prototipo no dice array sino html Collection y para usar las funciones de los arreglos se deben de pasar a arreglo

console.log(document.links); // accedemos a todos los enlaces que tenemos en el documento
console.log(document.images); // accedemos a las imagenes
console.log(document.forms); // a los formularios
console.log(document.styleSheets); // se acceden a las hojas de estilo que esten enlazadas al documento
console.log(document.scripts); //accedemos a todos los scripts que estan enlazados al documento

let tiempo = setTimeout(() => {
  console.log(document.getSelection().toString()); // esto es para mapear la seleccion que se hace en la pagina. con tostring lo convertimos a cadena de texto
}, 3000);
clearTimeout(tiempo);

document.write("<h2>HOLA MUNDO DESDE EL DOM</h2>"); // el write escribe en el documento en la parte de hasta abajo justo antes del cierre de body(no se recomienda su uso)

console.clear();

/************************ Nodos, Elementos y Selectores  *****************/

// los nodos de tipo elemento son aquellas etiquetas HTLM
// los nodos de tipo texto son los textos que llevan dentro estas etiquetas

// elementos que ya casi no se usan, estos devuelven una coleccion de HTML
console.log(document.getElementsByTagName("li")); // buscan todos los elementos que correspondan a dicha etiqueta
console.log(document.getElementsByClassName("card")); // buscan todos los elementos que correspondan a dicha clase
console.log(document.getElementsByName("nombre")); // lodos los elementos que coincida su atributo nombre

// este se sigue usando debido a que su rendimiento es mas rapido que el del queryselector al buscar por id
console.log(document.getElementById("menu"));

//Estos son los que se usan ahora, estos devuelven nodeList
console.log(document.querySelector("#menu")); // querySelector hace referencia a que recibira un selector valido de CSS id
console.log(document.querySelectorAll("a")); //querySelectorAll te trae a todos los selectores de ese tipo etiquetas HTML

console.log(document.querySelectorAll(".card")); //clases

// estos comparten varios elementos de los arreglos como:

console.log(document.querySelectorAll("a").length);

document.querySelectorAll("a").forEach((el) => console.log(el));

console.log(document.querySelectorAll(".card")[2]); // de todas las tarjetas va a imprimir la que se encuentra en la posicion 2

console.log(document.querySelectorAll("#menu li")); // tambien hace selecciones descendientes como en el css solo va a traer las listas que se encuentren dentro del id menu

console.log(document.querySelector("#menu li")); // cuando no se coloca el all solo nos devuelve la primera que encuentra

console.clear();

//********************* DOM: Atributos y Data-Attributes *********** */

//***************************obtencion de atributos

console.log(document.documentElement.lang); // con el document.documentElement seguido del nombre del atributo es como se accede a los atributos de las etiquetas HTML
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href); // con query selector igual podemos acceder al nombre de los atributos a partir de sus valores, ya sea usando el .
console.log(document.querySelector(".link-dom").getAttribute("href")); // o usando el getAtrubute, la diferencia es que este solo trae el valor del href y el otro trae toda la direccion plasmada en el navegador

// ****************modificacion de atributos

{
  document.documentElement.lang = "es";
  console.log(document.documentElement.lang); // ahora ya se cambio el valor del atributo de en a es

  // este es el metodo usando el SetAttribute
  document.documentElement.setAttribute("lang", "es-mx"); // recibe 2 parametros(atributo, nuevo valor)
  console.log(document.documentElement.lang);

  //se pueden guardar  la seleccion de los elemntos del DOM dentro de variables

  const $linkDom = document.querySelector(".link-dom"); // es una buena practica de escritura que todas las variables donde se guarden elementos del dom comiencen con el simbolo del $ al principio

  $linkDom.setAttribute("target", "_blank"); // es mas facil agregar cambios a los elementos del dom despues de que spn almacenados en variables ya que asi nos ahorramos escritura del codigo
  $linkDom.setAttribute("rel", "noopener"); // esta es una buena practica en html cuando a un enlace se le agrega un target-_blank ya que asi evita la dependecia entre la pestaña nueva con la que se saco el link

  $linkDom.setAttribute("href", "https://google.com");

  //****************** Remover atributos */

  console.log($linkDom.hasAttribute("rel")); // sirve para comprobar si existe un atributo dentro de la eqiqueta

  $linkDom.removeAttribute("rel"); // con removeAttribute es como le removemos atributos a las etiquetas del html
  console.log($linkDom.hasAttribute("rel")); // nos arroja un false ya que ya no se encuentra

  //******* Data-Attributes */
  // de igual manera se tiene la notacion del .
  // y tambien tenemos los setAttribute y getAttribute

  console.log($linkDom.getAttribute("data-description")); // con el getAttribute
  console.log($linkDom.dataset); // con la notacion del . lo devueleve en un Map
  console.log($linkDom.dataset.description); //accedemos con la notacion del . a el valor que tiene nuestro atributo data-description

  $linkDom.setAttribute("data-description", "Modelo de Objeto del Documento"); // modificando data-attributos con el metodo setAttribute
  console.log($linkDom.dataset.description);

  $linkDom.dataset.description = "Bienvenido a google"; // modificando data-attribute con con la notacion del .
  console.log($linkDom.dataset.description);

  console.log($linkDom.hasAttribute("data-id")); //igual se puenden consultar los atributos con el metodo has

  console.log($linkDom.removeAttribute("data-id")); // igual se pueden remover los data-attributos con el metodo remove
  console.log($linkDom.hasAttribute("data-id"));

  console.clear();
}

//****************** DOM: Estilos y Variables CSS ******************/

{
  //*************** Obtener valores */

  const $linkDom = document.querySelector(".link-dom");

  console.log($linkDom.style); // para encontrar atributos css es recomendable acceder con la notacion del .style (en este caso style es el nombre de nuestro atributo en el tag) ---- nos devuelve un tipo objeto con todas las propiedades que existen en css

  console.log($linkDom.getAttribute("style")); // el getAttribute solo devuelve lo que esta escrito en el atributo style d nuestro link

  console.log($linkDom.style.backgroundColor); // en js para acceder a los atributos CSS se hacen con el LowerCamelCase en vez de usar el - CSS = background-Color
  console.log($linkDom.style.color);

  // esta es otra manera de traer las propiedaes CSS usando el window
  console.log(window.getComputedStyle($linkDom)); // muestra un objeto con todas las propiedades que tiene css solo que esta los ordena de manera alfabetica

  console.log(getComputedStyle($linkDom).getPropertyValue("color")); // a traves del getPropiertyvalue podemos acceder a los valores especificos de nuestro enlace

  //*************** Estrablecer valores */

  $linkDom.style.setProperty("text-decoration", "none"); // a travez del .style usando un setProperty("propiedad Css con -", "valor");
  $linkDom.style.setProperty("display", "block");

  $linkDom.style.width = "50%"; // tambien se peuden establecer valores con la propiedad del .

  $linkDom.style.textAlign = "center"; // para usar la notacion del . se deben escribir las propiedades con LCC textAlign en lugar de text-align

  $linkDom.style.marginLeft = "auto";
  $linkDom.style.marginRight = "auto";
  $linkDom.style.padding = "1rem";
  $linkDom.style.borderRadius = ".5rem";

  console.log($linkDom.style);
  console.log($linkDom.getAttribute("style"));
  console.log(getComputedStyle($linkDom)); // recuerda que las ComputedStyle hace referencia a los valores que le establece cada navegador es por ello que auque tu le pongas unos valores en la consola te muestre otros que hacen equivalencia segun cada navegador

  //********** Variables CSS - Custom Properties CSS */

  //acceder a las variables CSS
  const $html = document.documentElement; // document.documentElement respresenta la etiqueta HTML ya que nuestras variables estan dentro de root que hace referencia a esta etiqueta

  const $body = document.body; // referenciamos nuestro body

  // guardamos en variables JS los valores de cada una de nuestras variables CSS
  let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
  let varYellowColor = getComputedStyle($html).getPropertyValue(
    "--yellow-color"
  );

  console.log(varDarkColor, varYellowColor);

  //remplazar valores
  //$body.style.backgroundColor = varDarkColor;
  // $body.style.color = varYellowColor;

  //modificar variables CSS

  $html.style.setProperty("--dark-color", "#000"); // se le cambio el valor a nuestra variable css pero para que surta efecto en la pagina se debe de volver a establecer el valor de la variable CSS a la variable JS ya que sigue teniendo el valor anterior
  varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"); // reasignamos el valor  y ahora varDarkColor = negro

  // usamos setProperty en vez de $body.style.backgroundColor = varDarkColor; pero es lo mismo
  // $body.style.setProperty("background-color", varDarkColor); // volvemos a darle el valor al body de varDarkColor que ahora es negro

  console.clear();
}

//****************************** Clases CSS ************************/
//acceder a las clases
{
  const $card = document.querySelector(".card");
  console.log($card);

  console.log($card.className); // devuelve la cadena de texto que tiene el atributo class
  console.log($card.classList); // devuelve un DOMTokenList que nos indica las clases que hay y en que posicion estan

  console.log($card.classList.contains("rotate-45")); // classList tiene el metodo contains("nombre de la classe") mediante el cual podemos verificar que una clase exista , devuelve un boolean

  //agregar clases a las etiquetas
  $card.classList.add("rotate-45"); // en classList con add podemos agregar nuevas clases
  console.log($card.classList.contains("rotate-45"));

  console.log($card.className); // ahora ya aparecen las 2 clases
  console.log($card.classList); // ahora mi DOMTokenList ya tiene 2 valores que son las 2 clases

  //Eliminar Clases
  $card.classList.remove("rotate-45");
  console.log($card.classList.contains("rotate-45"));

  // metodo palanca
  $card.classList.toggle("rotate-45"); // el metodo toggle funciona de manera inteligente, si mi etiqueta no tiene la clase se la agrega, pero si la tiene se la quita--- hasta aqui en la linea 217 eliminamos la clase
  console.log($card.classList.contains("rotate-45")); // true ya que como no la tenia y con el toggle se la puso

  $card.classList.toggle("rotate-45"); // se volvio a ejecutar el toggle por lo tanto se la elimino por que si la tenia
  console.log($card.classList.contains("rotate-45")); // false

  //Reemplazar clases
  $card.classList.toggle("rotate-45");

  $card.classList.replace("rotate-45", "rotate-135"); // replace sirve para remplazar una clase, recibe 2 parametros("Clase a remplazar", "nueva clase")

  //agregar varias clases
  $card.classList.add("opacity-80", "sepia");

  //remover varias clases a la vez
  $card.classList.remove("opacity-80", "sepia");

  //toggle solo permite una a la vez al igual que contains y replace
  $card.classList.toggle("opacity-80");
  $card.classList.toggle("sepia");

  console.clear();
}

//************************** DOM: Texto y HTML ********************/

{
  const $whatIsDOM = document.getElementById("que-es"); // recuerda que cuando captures id usas getElementById y no querySelector

  let text = `
    <p>
    El Modelo de Objetos del Documento (<b><i>DOM-Document Object Model</i></b>) es un API para 
    documentos HTML y XML.
    </p>
    <p>
    Este provee una representacion estructural del documento, permitiendo modificar su contenido y
    presentacion visual mediante codigo JS
    </p>
    <p>
    <mark>El DOM no es parte de la especificación de JS, es una API para los navegadores.</mark>
    </p>`;

  // modificar texto o contenidos en HTML

  $whatIsDOM.innerText = text; // innerText fue creada para internet explores pero desarrolla la misma funcion que la propiedad estandar y esta solo pasa texto no reconoce etiquetas HTML dentro de este y este si respeta las Tem plateString ya no se usa mejor usar una de las de abajo

  $whatIsDOM.textContent = text; // textContent es el estandar para colocar texto en este no respeta las tabulaciones dadas por la templateString y tampoco reconoce las etiquetas HTML dentro del texto

  $whatIsDOM.innerHTML = text; // innerHTML remplaza el contenido que tiene este nodo por contenido HTML en este si reconoce las etiquetas HTML, del mismo modo esta si respeta las templateString

  //********* Cuando usar cada una */
  // cuando se necesita insertar solo texto entonces usas textContent
  //cuando necesites insertar código HTML usas innerHTML

  $whatIsDOM.outerHTML = text; // outerHTML hace correcciones en el HTML por ejemplo cuando se usaban cualquiera de las 2 de arriba nos quedaban 3 parrafos dentro de el parrafo #que-es pero al usar este ese parrafo con el #que-es se elimino dejando asi solo sol 3 parrafos nuevos ya que se encontraban dentro de un parrafo ya que no estaba bien estructurado
}

//******************* DOM Traversing (Recorriendo el DOM) ************/

{
  // este DOM Traversing solo sirve para recorrer las etiquetas HTML de nuestro documento--- si se quisiera recorrer comentarios u otras cosas diferentes hay que buscar los otros métodos

  const $cards = document.querySelector(".cards");

  console.log($cards.children); // nos devuelve una coleccion de cada una de las card ya que son hijas de la clase cards
  console.log($cards.children[2]); // para acceder a un hijo en especifico, como si fuera un arreglo para elementos intermedios
  console.log($cards.parentElement); // muestra el padre de el elemento que en el caso de la seccion cards es el body, una etiqueta es un elemento en el DOM
  console.log($cards.firstElementChild); // para mostrar el primer elemento hijo
  console.log($cards.lastElementChild); //muestra el ultimo elemento hijo

  //console.log($cards.reviousSibling); sin la palabra Element muestran texts ya que se refieren a el salto de linea
  console.log($cards.previousElementSibling); // muestra el hermano anterior de el elemento consultado, en este caso nos referimos al section como elemento y su hermano anterior es un enlace
  console.log($cards.nextElementSibling); // del miso modo que el previousELementSibling el next muestra su hermano siguiente que vendria siendo la etiqueta Script

  //el metodo closest sirve para localizar al ancestro mas cercano
  console.log($cards.closest("div")); // por ejemplo aqui buscamos al div anterior mas cercano que tengamos antes de nuestro section

  console.log($cards.children[3].closest("section")); // en esta nos ubicamos en el index 3 hijo de la section que es la figure 4 y le decimos que queremos ver el ancestro de tipo section mas cercano a nosotros y nos mostrara que es el mismo section al cual hacemos referencia

  console.clear();
}

/*************** DOM : Creando Elementos y Fragmentos  *****************/

{
  //creacion de las variables que tendrann los elementos a incorporar
  // createElement("nombre del elemento HTML") te permite crear cualquier etiqueta HTML
  const $figure = document.createElement("figure"),
    $img = document.createElement("img"),
    $figcaption = document.createElement("figcaption"),
    $figcaptionText = document.createTextNode("Animals"), //createTextNode te permite crear un nodo de tipo texto que es lo que llevan dentro las etiquetas HTML referentes a texto
    $cards = document.querySelector(".cards"),
    $figure2 = document.createElement("figure");

  // conectamos los elementos que vamos a colocar
  $figcaption.appendChild($figcaptionText);
  $figure.appendChild($img);
  $figure.appendChild($figcaption);

  // agregamos atributos y clases
  $img.setAttribute("src", "https://placeimg.com/200/200/animals");
  $img.setAttribute("alt", "Animals");
  $figure.classList.add("card");

  // incorporacion de los elementos al HTML
  $cards.appendChild($figure); // appendChild agrega un hijo a una etiqueta que hace la funcion del padre en este caso el padre es section y el hijo es un figure

  // esta es otra manera de agregar pero no la uses solo es para que veas que se puede
  $figure2.innerHTML = `
  <img src="https://placeimg.com/200/200/people" alt="People">
  <figcaption>People</figcaption>
  `;

  $figure2.classList.add("card");
  $cards.appendChild($figure2);

  // aunque es mas facil crearla de esta manera ya que te ahorras lineas de codigo esto no generara nodos que JS reconozca asi que es mejor usar la otra manera

  //************** */ agregar varios nodos al mismo tiempo o a la vez

  const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
    $ul = document.createElement("ul");

  document.write("<h3>Estaciones Del Año</h3>"); //Escribe hasta el final del HTML no es buena practica usar

  document.body.appendChild($ul);

  estaciones.forEach((el) => {
    // por cada elemento dentro de estaciones  hara
    const $li = document.createElement("li"); // crear una li
    $li.textContent = el; // agregar a la li el texto que tiene el elemento
    $ul.appendChild($li); // añadir la li a nuestra ul
  });

  // tambien se puede hacer con el innerHTML nadamas que usando este no estas creando los nodos HTML

  const continentes = ["África", "América", "Asia", "Europa", "Oceanía"],
    $ul2 = document.createElement("ul");

  document.write("<h3>Continentes del Mundo</h3>");
  document.body.appendChild($ul2);

  $ul2.innerHTML = ""; // cuando se hace usando el innerHTML  se debe inicializar la variable vacia para que posteriormente se le pueda modificar lo que llevara

  continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`)); //+= es para que plasme cada uno de los valores y los almacene de lo contrario solo sobreescribira}

  //************************************* Fragmentos */

  //usar fragmentos es una manera mas optima de agregar grandes contenidos de nodos al DOM ya que al hacer una sola inserccion en el DOM reduce la demanda de recursos que se le piden al navegador

  const meses = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ],
    $ul3 = document.createElement("ul"),
    $fragment = document.createDocumentFragment();

  meses.forEach((el) => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $fragment.appendChild($li);
  });

  document.write("<h3>Meses del Año</h3>");

  $ul3.appendChild($fragment);
  document.body.appendChild($ul3);

  // empezar a acostumbrarse a usar los fragmentos
}

//******************** Templates HTML  ************************/

{
  const $cards = document.querySelector(".cards"),
    $template = document.getElementById("template-card").content, //.content solo indica que hara referencia al contenido dentro de la etiqueta template y no al elemento template
    $fragment = document.createDocumentFragment(),
    cardContent = [
      {
        title: "Tecnologia",
        img: "https://placeimg.com/200/200/tech",
      },
      {
        title: "Animales",
        img: "https://placeimg.com/200/200/animals",
      },
      {
        title: "Arquitectura",
        img: "https://placeimg.com/200/200/arch",
      },
      {
        title: "Gente",
        img: "https://placeimg.com/200/200/people",
      },
      {
        title: "Naturaleza",
        img: "https://placeimg.com/200/200/nature",
      },
    ];

  cardContent.forEach((el) => {
    // a travez de $template accedemos al elemento img y le agragamos el atributo src con el valor que tiene de la imagen nuestro elemento del arreglo
    $template.querySelector("img").setAttribute("src", el.img);
    $template.querySelector("img").setAttribute("alt", el.title);
    $template.querySelector("figcaption").textContent = el.title;

    //nos sirve para clonar nodos
    //document.importNode(que vamos a clonar, true); el true significa que si queremos que se clone toda la estructura interna si tuviera un false solo se copiaria la etiqueta template
    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone); // agregamos ese clon a nuestro fragmento
  });

  $cards.appendChild($fragment); // agregamos el fragmento a cards para asi poder hacer una sola insercion
}

//******************** Modificando Elementos (Old Style) *****************/

{
  const $cards = document.querySelector(".cards"),
    $newCard = document.createElement("figure");
  // $cloneCards = $cards.cloneNode(true); // true clonara todo elemento con hijos si esta enfalse solo clona el elemento

  //$newCard.innerHTML = `
  //  <img src="https://placeimg.com/200/200/any" alt="Any">
  //  <figcaption>Any</figcaption>
  // `;

  //$newCard.classList.add("card");

  //remplazar un nodo del Dom/elementos en una posicion especifica
  //$cards.replaceChild($newCard, $cards.children[2]);// toma 2 parametros (nuevo nodo, nodos a remplazar)

  //insertar antes de un nodo
  //$cards.insertBefore($newCard, $cards.firstElementChild); // toma 2 parametros como referencia(elemento a insertar, antes de que nodo ira)

  //eliminar
  //$cards.removeChild($cards.lastElementChild); // eliminamos el ultimo de los hijos

  //document.body.appendChild($cloneCards);
}

//******************** DOM: Modificar Elementos (Cool Style) ****************/

// existen 3 metodos para insertar

/*insertAdjacent...
.insertAdjacentElement(position, el)// es como un appendChild o insertBefore
.insertAdjacentHTLM(position, el)// es como un innerHTML
.insertAdjacentText(position, el)//es como un textContent

---reciben 2 parametros (posicion y el contenido textual)----
las posiciones es alguna de estas de aca abajo

Posiciones:
beforebegin(hermano anterior)// como hermano anterior o antes del elemento que se toma como referencia
afterbegin(primer hijo)//el primer elemento hijo del elemento que se tome como referencia
beforeend(ultimo hijo)// en este caso seria el ultimo hijo
afterend(hermano siguiente)//seria el hermano siguiente o despues de el elemento que se tome como referencia
 */

{
  const $cards = document.querySelector(".cards"),
    $newCard = document.createElement("figure");

  let $constentCard = `
    <img src="https://placeimg.com/200/200/any" alt="Any">
    <figcaption></figcaption>
    `;

  $newCard.classList.add("card");

  // estas mismas posiciones funcionan para insertAdjacentHTML e insertAdjacentText

  $newCard.insertAdjacentHTML("beforeend", $constentCard); // insertamos el contenido que tendra la figura
  $newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any"); // insertamos el texto a la parte de del figcaption

  $cards.insertAdjacentElement("beforebegin", $newCard); // usando beforebegin se inserto antes del elemento section ya que ese es el que fue tomado como referencia

  $cards.insertAdjacentElement("afterbegin", $newCard); // se inserto dentro del section como primer hijo

  $cards.insertAdjacentElement("beforeend", $newCard); // se inserto dentro de section como ultimo hijo

  $cards.insertAdjacentElement("afterend", $newCard); // se agrega despues del section que fue tomado como referencia

  //*******************prepend, append, before, after */

  $cards.prepend($newCard); // hace lo mismo que insertAdjacentElement(afterbegin)
  $cards.append($newCard); // hace lo mismo que insertAdjacentElement(beforeend)
  $cards.before($newCard); // hace lo mismo que insertAdjacentElement(beforebegin)
  $cards.after($newCard); // hace lo mismo que insertAdjacentElement(afterend)
}

//***************** Manejador de Eventos  **********************/
//eventos es el mecanismo que tiene JS para poder controlar las acciones de los usuarios y definir ciertos comportamientos del documento
{
  //*************** Evento desde el HTML */
  // 1er Forma como un atributo del HTML
  function holaMundo() {
    // esta funcion se convertira en una manejadora de eventos es deir que es una fcuncion que se ejecuta en un evento
    alert("Hola Mundo");
    console.log(event);
  }

  //************* Manejador Semántico */
  // 2da Forma y mas correcta con Manejador Semántico
  const $eventoSemantico = document.getElementById("evento-semantico");

  $eventoSemantico.onclick = holaMundo; // sin parentesis por que al colocar la funcion con parentesis quiere decir que al momento de recargar la pag se dispara la funcion y no esperaria al click
  // una vez que se le define un evento semantico a una parte del DOM solo va a poder ejecutar una funcion por cada evento

  $eventoSemantico.onclick = function (e) {
    // al agregarle otra funcion al nuestro evento onclick este se sobreescribe por el nuevo por lo tanto el evento anterior ya no estará, se le pasa como parametro el evento que en este caso se representa con la letra e/ event -- tambien es valido
    alert("Hola Mundo manejador de eventos semánticos");
    console.log(e);
  };

  //*************** Manejador Múltiple */
  // es usado cuando se requieren colocar mas de un evento a los elementos de nuestro HTML

  const $eventoMultiple = document.getElementById("evento-multiple");

  // el addEventListener es como si se le creara una lista de eventos para que pueda realizar mas de 1 funcion por evento
  $eventoMultiple.addEventListener("click", holaMundo);
  $eventoMultiple.addEventListener("click", (e) => {
    // solo se puede pasar el parametro evento
    alert("Hola Mundo manejador de eventos multiples");
    console.log(e);
    console.log(e.type); // obtenemos el tipo de evento
    console.log(e.target); // obtenemos el objeto que lo origina
  });
}

//****************** DOM: Eventos con Parámetros y Reover Eventos *************/
{
  function saludar(nombre = "Desconocid@") {
    alert(`Hola ${nombre}`);
    console.log(event);
  }

  // para poder pasar parametros dentro de un evento es necesario usar una funcion o una arrow function ya que el addEventListener recibe 2 parametros ("evento", "funcion Manejadora") y al mandar a llamar nuestra funcion con parametros dentro de la funcion manejadora esta ya recibe los parametros de manera adecuada
  const $eventoMultiple = document.getElementById("evento-multiple");
  $eventoMultiple.addEventListener("click", (e) => {
    saludar(); // mandamos llamar nuestra funcion dentro se la funcion manejadora
    saludar("Ramiro"); // la mandamos a llamar con parametros
  });

  //****************** Eliminar eventos de un eveto */

  // para poder remover eventos se tiene que guardar el evento a remover dentro de una funcion declarada o expresada
  const removerDobleClick = (e) => {
    // esta recibe el evento
    alert(`Removiendo el evento de tipo ${e.type}`);
    console.log(e);
    $eventoRemover.removeEventListener("dblclick", removerDobleClick); // removeEventListener se usa para remover eventos, se pasa el evento y la funcion que se ejecuta
    $eventoRemover.disabled = true;
  };

  // no se puede usar una arrow function o una funcion anonima para poder remover eventos ya que estas no pueden remover el evento cuando se esta llamando
  const $eventoRemover = document.getElementById("evento-remover");
  $eventoRemover.addEventListener("dblclick", removerDobleClick); // pasamos el evento y la funcion que llamaremos

  // ahora este evento quedara removido despues de recibir el evento
}

//**************** DOM: Flujo de Eventos (Burbuja y Captura) ****************/

{
  //hay 2 maneras en como se propaga el evento burbuja y captura

  // face de burbuja en esta partimo del elemento mas interno que tiene originado el evento hacia el mas externo
  const $divEventos = document.querySelectorAll(".eventos-flujo div");
  console.log($divEventos);

  function flujoEventos(e) {
    console.log(
      `Hola te saluda ${this.className}, el click lo origino ${e.target.className}`
    );
  }

  $divEventos.forEach((div) => {
    //face burbuja
    //div.addEventListener("click", flujoEventos, false);// addEventListener tiene un tercer parametro el cual indica la propagacion de los eventos, por defecto traen false -> evento burbuja (que se refiere del elemento mas interno hacia el elemento externo) y si se cambia a true ----> cambia al evento captura(que al inverso de la burbuja se refiere : del elemento más externo al interno)
    //fase captura
    //div.addEventListener("click", flujoEventos, true);
    // tambien se le puede pasar un objeto (visitar documentacion MDN para ver cuales objetos permite)
    /*div.addEventListener("click", flujoEventos, {
      capture: false, // indica si el flujo es burbuja o captura
      once: true, // once solo permite que se ejecuten 1 vez
    });*/
  });

  console.clear();
}

//************** DOM: stopPropagation y preventDefault  ******************/

{
  // estas se usan para detener la propagacion de  nuestros eventos y para quitar los eventos que vienen por defecto de nuestro navegador

  const $divEventos = document.querySelectorAll(".eventos-flujo div"),
    $linkEventos = document.querySelector(".eventos-flujo a"); // recuerda que querySelector solo trae el primero que encuentra
  console.log($divEventos);

  //********* Deteniendo Propagacion de Eventos */

  /*function flujoEventos(e) {
    console.log(
      `Hola te saluda ${this.className}, el click lo origino ${e.target.className}`
    );
    e.stopPropagation(); // .stopPropagation(); sirve para evitar que se propague el evento y solo se ejecute en donde se origina, en el burbuja --- si es en el captura indicaria el lugaar donde comienza la propagacion pero de afuera hacia adentro
  }

  $divEventos.forEach((div) => {
    div.addEventListener("click", flujoEventos, false);
  });
  */
  //****************** Eliminando Eventos por Defecto */
  /* $linkEventos.addEventListener("click", (e) => {
    alert("Hola soy Ramiro Sánchez");
    e.preventDefault(); // se le aplica el metodo preventDefault a nuestro evento el cual permite cancelar el evento que viene por defauld de nuestros navegadores
    e.stopPropagation(); // detenemos la propagacion del evento para que solo se realice el evento del enlace de lo contrario se realiza el evento del div 3 ya que el enlace esta dentro del div y este tambien tiene un evento
  });*/
}

// ******************** DOM: Delegacion de Eventos ******************
{
  // con la delegacion se mejora el rendimiento en cuanto a memoria y recursos ya que gracias a esta solo se agregaria un addEventListener por evento y se le colocaria al objecto document, posteriormente solo se llamaria el evento de a cuerdo a donde se necesite  evitando asi la propagacion de eventos
  //******** Recomendable usarlo asi  */

  function flujoEventos(e) {
    console.log(
      `Hola te saluda ${this}, el click lo origino ${e.target.className}`
    );
  }

  // agregamos los eventos al document y posteriormente los llamaremos solo a los lugares donde necesitemos desencadenar los eventos
  document.addEventListener("click", (e) => {
    console.log(`click en`, e.target);
    //.matches busca un selector valido

    if (e.target.matches(".eventos-flujo div")) {
      // validamos que donde se hizo click coincida con el selector donde se desea que vaya dicho evento
      flujoEventos(e);
    }

    if (e.target.matches(".eventos-flujo a")) {
      // valida que cuando se seleccione la referencia donde esta el enlace dara a verdadero y procedera a arrojar el alert
      alert("Hola soy Ramiro Sánchez");
      e.preventDefault(); // ess para que no abra el evento que trae por defecto
      //e.stopPropagation(); ya no es necesario usarlo ya que el document no tiene ningun padre arrriba de el sino que el es el padre y no se propagara el flujo de eventos hacia ningun lado
    }
  });

  console.clear();
}

// ********************* BOM: Propiedades y Eventos *******************

{
  // son las propiedades y eventos que se desencadenan y que tiene el mismo navegador

  window.addEventListener("resize", (e) => {
    /* console.clear();

    // tamaños de  la ventana de la pag
    console.log("************Evento resize************");
    console.log(window.innerWidth); // el ancho de la pagina web solo la pagina
    console.log(window.innerHeight); // el alto de la pagina sin contar barra de navegacion solo lo de la pagina
    console.log(window.outerWidth); // ancho de la pantalla del navegador
    console.log(window.outerHeight); // alto de la pantalla delnavegador o su ventana

    console.log(e);*/
  });

  // la ventana tiene un evento del Scroll
  window.addEventListener("scroll", (e) => {
    /*console.clear();
    console.log("********** Evento Scroll *************");

    //propiedad scroll de la pagina que arroja el navegador
    console.log(window.scrollX); // muestra cuanto se aleja el scroll de x en px
    console.log(window.scrollY); // y muestra cuanto se aleja el scroll de y en px

    console.log(e);*/
  });

  //en que coordenadas de la pantalla se empieza a dibujar la ventana
  window.addEventListener("load", (e) => {
    // este evento se va a disparar justo cuando la ventana del navegador se termine de cargar
    /*console.log("************ Evento Load ***********");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);*/
  }); // esta carga directamente desde el window y despues carga el DOM por eso es mas rapida para cargar la de abajo, pero este si espera a que se haya cargado todo, CSS, imagenes, etc

  //igual sirve para dispararse una vez que se carga toda la pagina, este carga primero el DOM y despues el window gracias a la propagacion del evento, este es disparado cuando el documento HTML ha sido cargado y parseado, pero no esperara a que carguen las CSS, imagenes o scrips para que empiece a funcionar
  //************* Comenzaremos a usar este */
  document.addEventListener("DOMContentLoaded", (e) => {
    /* console.log("************ Evento DOMContentLoaded ***********");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);*/
  });
}

//************************ BOM: Metodos **************************/

{
  /*
  Estos son unos de los metodos que ofrece el BOM
  window.alert("Alerta");
  window.confirm("Confirmacion");
  window.prompt("Aviso");
  */
  // todo lo que cuelga del window no es necesario colocar window
  /*
  alert("Alerta");
  confirm("Confirmacion");
  prompt("Aviso");
  */

  const $botonAbrir = document.getElementById("abrir-ventana"),
    $botonCerrar = document.getElementById("cerrar-ventana"),
    $botonImprimir = document.getElementById("imprimir-ventana");

  let ventana;

  $botonAbrir.addEventListener("click", (e) => {
    ventana = window.open("https://google.com.mx"); // open sirve para abrir una nueva ventana ("lo que se abrira en la nueva ventana"), lo almacenamos en una ventana para despues poderla cerrar
  });
  $botonCerrar.addEventListener("click", (e) => {
    //window.close();// close cierra una ventana, si se deja vacia close() cerrara nuestra ventana actual es por eso que se guardo en una variable el valor de la ventana que abrimos para asi poder cerrar esa ventana
    ventana.close(); // asi cerramos la ventana que abrimos
  });
  $botonImprimir.addEventListener("click", (e) => {
    window.print(); // sirve para imprimir la pagina o pestaña , manda a traer la funcion imprimir de cada navegador
  });
  console.clear();
}

//********************* BOM: URL, Hiatorial y Navegador ************************/

{
  //******************* */ ULR o location

  console.log("**************** Objeto URL (Location) ****************");
  console.log(location);
  //propiedades mas importantes del objeto URL
  console.log(location.origin); // da el origen osea la ruta de la cual se origina http://127.0.0.1:5500
  console.log(location.protocol); //nos muestra el protocolo http:
  console.log(location.host); //  nos muestra el host 127.0.0.1:5500 que es el nombre del dominio
  console.log(location.hostname); // de igual manera muestra el nombre del host 127.0.0.1
  console.log(location.port); // indica el puerto por el que esta escuchando live server 5500
  console.log(location.href); // nos muestra toda la URL completa incluyendo el nombre del archivo http://127.0.0.1:5500/dom.html
  console.log(location.hash); //nos devuelve el valor de la url que esta despues de una ancla(hash)
  console.log(location.pathname); //es el archivo al que se esta consultando /dom.html
  console.log(location.search); // nos muestra los parametros que se pasan por la url
  //location.reload();//sirve para recargar una pagina
  console.clear();

  //********************* Historial */

  console.log("**************** Historial ****************");
  console.log(history);
  console.log(history.length); // muestra el historial de las paginas que ha guardado
  //history.back(1);// nos sirve para regresar las paginas el back(numero de paginas que quieres volver)
  //history.forward(1);// al inverso del back esta es cuantas paginas quieres ir hacia adelante en el historial que tenmos en el navegador pero relacionado con la pagina donde estamos
  //history.go()//es un metodo para ir atras o adelante dependiendo del valor que le des, (-1 negativos atras ) y (1 positivos adelante)
  console.clear();

  //********************* Navegador */

  console.log("**************** Navegador ****************");
  console.log(navigator);
  console.log(navigator.connection);//nos da cierta informacion relacionada a la coneccion de internet que tenemos
  console.log(navigator.geolocation);// nos da informacion de la localizacion donde nos encontramos
  console.log(navigator.mediaDevices);//dispositivos como camaras o microfonos
  console.log(navigator.mimeTypes);//tipos de formatos que dependiendo del tipo de aplicacion soportan los navegadores
  console.log(navigator.onLine);//nos muestra si estamos conectados o desconectados a internet (true-false)
  console.log(navigator.serviceWorker);//es una API que nos sirve para hacer web progresive apps
  console.log(navigator.storage);//API de almacenamiento
  console.log(navigator.usb);//capacidad de detectar dispositivo USB
  console.log(navigator.userAgent);// nos da informacion sobre el usuario que usa la app, S.O, etc

  console.clear();

}
