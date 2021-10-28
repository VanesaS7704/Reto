let usuario = prompt ("Ingrese un dato cualquiera");

function Datos() {
    if(typeof(usuario) == "string"){
        if (isNaN(usurario)== false){
            return nombre +("El dato registrado es tipo numérico");
        }else{
            return nombre + ("El dato registrado es tipo string");
        }
    }else{
        document.write(typeof(usuario));
    }

    return "El dato que regsitro es:" + usuario;
}

document.write(Datos());







// Numero = 1
// string = "partido"
// Boolean = false