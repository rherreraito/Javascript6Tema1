/*
   Autor: Rafael Herrera García
   Archivo: ejercicio7.js
   Descripción: Muestra uno de los posibles usos de confirm, El programa 
                pregunta que tipo de animal desea ver. Cuando se confirma 
                se muestra el animal seleccionado.
*/
var urlimagenes='..//images//';
var imagenes=['ardilla.jpg',
              'borrego.jpg',
              'chimpance.jpg',
              'conejo.jpg',
              'gato.jpg',
              'koala.jpg',
              'mapache.jpg',
              'panda.jpg',
              'perro.jpg',
              'zorro.jpg'
             ];
var nombres=['Ardilla',
             'Borrego',
             'Chimpance',
             'Conejo',
             'Gato',
             'Koala',
             'Mapache',
             'Panda',
             'Perro',
             'Zorro'
            ]

// Función para leer con confirm
function leerConfirm(texto){
    var test;
    test=confirm(texto);
    return test;
}
// Función que genera un número entero aleatorio
function generaEntero(n){
    return Math.floor(Math.random()*n);
}
// Función para generar nombre de uno de los animales
function generaNombre(n){
    var i=generaEntero(n);
    return nombres[i];
}

function gestionaCarrusel(nombre,i){
    do{
        nombre=nombres[i];
        if (leerConfirm("¿Quieres ver un "+nombre+"?"))
            break;
        if(i<9)
           i++;
        else
          i=0;
    }while(true);
    return i;
}


function ejercicio7(){
    var nombre;
    var i;
    nombre=generaNombre(10);
    i=generaEntero(10);
    i=gestionaCarrusel(nombre,i);
    document.images[0].src=urlimagenes+imagenes[i];
}

ejercicio7();

