function handleEvent ()
{
    let boton0 = document.getElementById('botonOpcion0');
    boton0.addEventListener('click', muestraParrafo);
    boton0.addEventListener('click', mantenerBoton);


    let boton1 = document.getElementById('botonOpcion1');
    boton1.addEventListener('click', muestraParrafo);
    boton1.addEventListener('click', mantenerBoton);

    let boton2 = document.getElementById('botonOpcion2');
    boton2.addEventListener('click', muestraParrafo);
    boton2.addEventListener('click', mantenerBoton);
}

function muestraParrafo(e)
{
    let article = document.getElementsByClassName('contenedor__opcion');
    for (let i = 0; i < article.length; i++) 
    {
        article[i].style.display = 'none';
    }

let parrafoValor = parseInt(e.target.value);

article[parrafoValor].style.display = 'block';
}


//____________________________________________________________________________________________________________________________


/* let seleccionarBoton = document.getElementById('botonOpcion0');

seleccionarBoton.addEventListener('click', event => 
{
    event.target.style.boxShadow = 
    'inset 0.3rem 0.3rem 0.5rem rgba(91, 91, 91, 0.3), 0.4rem 0.4rem 0.5rem rgba(255, 255, 255, 0.708)';
});


let seleccionarBoton1 = document.getElementById('botonOpcion1');

seleccionarBoton1.addEventListener('click', event => 
{
    event.target.style.boxShadow = 
    'inset 0.3rem 0.3rem 0.5rem rgba(91, 91, 91, 0.3), 0.4rem 0.4rem 0.5rem rgba(255, 255, 255, 0.708)';
});


let seleccionarBoton2 = document.getElementById('botonOpcion2');

seleccionarBoton2.addEventListener('click', event => 
{
    event.target.style.boxShadow = 
    'inset 0.3rem 0.3rem 0.5rem rgba(91, 91, 91, 0.3), 0.4rem 0.4rem 0.5rem rgba(255, 255, 255, 0.708)';
}); */

function mantenerBoton(e)
{
    let button = document.getElementsByClassName('boton__opcion');
    for (let i = 0; i < button.length; i++) 
    {
        button[i].style.boxShadow = 
        'inset 0.4rem 0.4rem 0.5rem rgba(255, 255, 255, 0.708), 0.3rem 0.3rem 0.5rem rgba(91, 91, 91, 0.3)';
    }

let buttonSeleccionado = parseInt(e.target.value);

button[buttonSeleccionado].style.boxShadow = 
'inset 0.3rem 0.3rem 0.5rem rgba(91, 91, 91, 0.3), 0.4rem 0.4rem 0.5rem rgba(255, 255, 255, 0.708)';
}



//____________________________________________________________________________________________________________________________

/* let arrayImagenes = ['botonOpcion0', 'botonOpcion1', 'botonOpcion2']

let posicion = 0;

function seleccionaImagen (e)
{
    let valorBoton = e.target.value;
    let arrayBotones = document.getElementsByClassName('boton__opcion');

    for (let i = 0; i < arrayBotones.length; i++)
    {
        if (valorBoton == i)
            {
                arrayBotones[i].style.style.boxShadow = 
                'inset 0.4rem 0.4rem 0.5rem rgba(255, 255, 255, 0.708), 0.3rem 0.3rem 0.5rem rgba(91, 91, 91, 0.3)';
            }
        else 
            {
                arrayBotones[i].style.boxShadow = 
                'inset 0.3rem 0.3rem 0.5rem rgba(91, 91, 91, 0.3), 0.4rem 0.4rem 0.5rem rgba(255, 255, 255, 0.708)';
            }
    }


    //let valorBoton = e.target.value;
    posicion = parseInt(valorBoton);
    
    let imagen = document.getElementsByClassName('boton__opcion');
    imagen.boxShadow = arrayImagenes[posicion]
} */


/*   // Obtener el elemento de botón desde el DOM
  let click = document.getElementById('botonOpcion0');
  // Definir la función que se ejecutará cuando se haga clic en el botón
  function registrarClick() {
      console.log('¡Haz hecho clic en el botón!');
  }
  // Adjuntar el evento de clic al botón utilizando addEventListener()
  click.addEventListener('click', registrarClick);

function onClick ()
{

} */
/* 
let posicion = 0;
let arrayImagenes = document.getElementsByClassName('boton__opcion'); 

function seleccionaImagen (e)
{
    let valorBoton = e.target.value;
    let arrayBotones = document.getElementsByClassName('contenedor__botones');


    for (let i = 0; i < arrayBotones.length; i++)
    {
        if (valorBoton == i)
            {
                arrayBotones[i].style.color = 'blue';
            }
        else 
            {
                arrayBotones[i].style.color = 'red';
            }
    }


    //let valorBoton = e.target.value;
    posicion = parseInt(valorBoton);
    
    let imagen = document.getElementById('botonOpcion0');
    imagen.src = arrayImagenes[posicion]
} */


/* let allLi = document.getElementsByClassName("boton__opcion");

function selection(e) {
if (event.ctrlKey) {
return e.target.classList.toggle("hover");
}
for (elem of allLi) {
elem.classList.remove("hover");
}
e.target.classList.toggle("hover");
}

for (elem of allLi) {
elem.addEventListener("click", selection);
elem.onmousedown = function () {
return false;
};
} */

window.onload = handleEvent;
