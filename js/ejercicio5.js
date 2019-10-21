/*
   Autor: Rafael Herrera García
   Archivo: ejercicio5.js
   Descripción: Muestra uno de los posibles usos de prompt, para calcular
                Si dados los 3 lados de un triangulo, se trata de un
                triangulo rectangulo.
*/
// Función para leer un número
function leerNumero(texto){
    var num;
    num=prompt(texto);
    return parseFloat(num);
}
// Función para probar si se trata de un triangulo rectangulo
function prueba(a,b,c){
    return Math.pow(c,2)==Math.pow(a,2)+Math.pow(b,2);
}
// Función que evalua todas las combinaciones de los lados
function combina(a,b,c){
    var test=false;
    if(prueba(a,b,c))
           test=true;
    else if(prueba(a,c,b))
          test=true;
    else if(prueba(b,c,a))
          test=true;
    return test;
} 
// Función que escribe un texto
function escribe(texto){
    document.write(texto);
}

function ejercicio5(){
    var a,b,c;
    a=leerNumero("Proporciona un primer lado de un triangulo:");
    b=leerNumero("Proporciona un segundo lado de un triangulo:");
    c=leerNumero("Proporciona un tercer lado de un triangulo:");
    escribe("<center><h2>"+(combina(a,b,c)?"Se trata ":"No se trata ")+"de un triangulo rectangulo</h2></center>");
}

ejercicio5();

