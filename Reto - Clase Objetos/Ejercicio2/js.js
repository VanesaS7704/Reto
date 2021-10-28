let UsuarioNuevo = {
    Nombre: "Sscar",
    Edad: 25,
    Dia: 12,
    Mes: "Mayo",
    Año: 2000,
    Ciudad: "México",
    Email: "scars.gmail.com",
    Pasword: "redmd12",
    Idioma: "Español",
    Genero:"Mujer"
};

NombreInformacionUsuario(UsuarioNuevo);

function NombreInformacionUsuario(usuario){
    document.write("Nombre: " +UsuarioNuevo.Nombre+ "<br>");
    document.write("Edad:" +UsuarioNuevo.Edad+ "<br>");
    document.write("Dia:" +UsuarioNuevo.Dia+ "<br>");
    document.write("Mes:" +UsuarioNuevo.Mes+ "<br>");
    document.write("Año:" +UsuarioNuevo.Año+ "<br>");
    document.write("Ciudad:" +UsuarioNuevo.Ciudad+ "<br>");
    document.write("Email:" +UsuarioNuevo.Email+ "<br>");
    document.write("Pasword:" +UsuarioNuevo.Pasword+ "<br>");
    document.write("Idioma:" +UsuarioNuevo.Idioma+ "<br>");
    document.write("Genero:"  +UsuarioNuevo.Genero+ "<br>");
}



CambiarInformacionUsuario(UsuarioNuevo);



function CambiarInformacionUsuario(UsuarioNuevo){

    let sustitucion = prompt("¿Cual elemento desea modificar");
    if(sustitucion == "Nombre"){
        cambio_sustitucion = prompt("Ingrese un nombre nuevo");
        UsuarioNuevo.Nombre = cambio_sustitucion;
        return document.write(NombreInformacionUsuario(NombreInformacionUsuario.Nombre));
    }

}

var Nuevo = ["Sscar", 25,12,"Mayo",2000,"México","scars.gmail.com","redmd12","Español","Mujer"]
var noDupe = let.from(new Set(UsuarioNuevo))
