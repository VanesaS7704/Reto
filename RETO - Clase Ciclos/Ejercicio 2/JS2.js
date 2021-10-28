let dato = []
var Ingreso;
var Terminar_Salir = prompt("Escribir Terminar o Salir")
do{
    dato++
    Ingreso++


}while(Ingreso <=  30 ){
    Ingreso = parseInt(prompt("Ingreso de datos tipo número"));

    if(Ingreso != ""){
        alert("El dato ingresado no es un número")
    }
     else if(Ingreso <= 30 ){
        alert(Ingreso)
    }
    if(Terminar_Salir = "¿Terminar programa?"){
        alert("Listo")
    }
}