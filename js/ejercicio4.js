/*
   Autor: Rafael Herrera García
   Archivo: ejercicio4.js
   Descripción: Muestra uno de los posibles usos de prompt
*/
// Función para leer un número
function leerNumero(texto){
    var num;
    num=prompt(texto);
    return parseInt(num);
}
// funcion para sumar dos numeros
function suma(a,b){
    return a+b;
}
// Función que escribe un texto
function escribe(texto){
    document.write(texto);
}

function ejercicio4(){
    var a,b;
    a=leerNumero("Proporciona un número entero:");
    b=leerNumero("Proporcionar otro número:");
    escribe("<center><h2>La suma de:"+a+"+"+b+"="+suma(a,b)+"</h2></center>");
}

ejercicio4();

