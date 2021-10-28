let usuario = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
var dia;
while(!(dia=="")){
    dia = prompt("Ingresa un dia de la semana");

    if ( dia == " Lunes"){
        alert("Leer")
    }
    if (dia == "Martes"){
        alert("Ir a correr")
    }
    if (dia == "Miercoles"){
        alert("Estudiar")
    }
    if (dia == "Jueves"){
        alert("Salir con amigos")
    }
    if (dia == "Viernes"){
        alert("Practicar deporte")
    }
    if (dia == "Sabado"){
        alert("Ver peliculas")
    }
    if (dia == "Domingo"){
        alert("Ve a descansar")
    }
    else{
        usuario.push(dia)
    }
}
console.log("Introduciste un dia de la semana" + usuario)

