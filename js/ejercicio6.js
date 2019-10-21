/*
   Autor: Rafael Herrera García
   Archivo: ejercicio6.js
   Descripción: Muestra uno de los posibles usos de confirm, en cierta encuesta
                se esta solicitando que las personas, nos indiquen si han contraido
                alguna enfermedad por picadura de insecto en los últimos meses. Como no
                se sabe la cantidad de personas, se preguntará después de leer una
                encuesta deberá preguntar si hay más encuestados. Al final deberá
                imprimirnos, la cantidad de personas encuestadas, el porcentaje de los
                que si han contraido alguna enfermedad por picadura de insecto.
*/
// Función para leer con confirm
function leerConfirm(texto){
    var test;
    test=confirm(texto);
    return test;
}
// Función para gestionar la lectura de los datos
function leerEncuestas(){
    var i=0;
    var contagiado=0;
    do{
        i++;
        if (leerConfirm("¿Has padecido contagio por picadura de insecto? <Aceptar> Si <Cancelar> No")){
            contagiado++;
        }
        test=leerConfirm("¿Hay más encuestados?:<Aceptar> Si <Cancelar> No");
    }while(test);
    return {'i':i,
            'contagiados':contagiado
           };
}

function getPorcentaje(n,c){
    return c*100/n;
}

function escribe(texto){
    document.write(texto);
}

function ejercicio6(){
    var item;
    var porcentaje;
    item=leerEncuestas();
    porcentaje=getPorcentaje(item['i'],item['contagiados']);
    escribe("<center><h2>Total de encuestados="+item['i']+"<br/>");
    escribe("Porcentaje de contagiados="+porcentaje+"</h2></center>");
}

ejercicio6();

