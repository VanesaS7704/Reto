/// Numeros impares del 1 al 50

var contador = 0;
for( var index = 2; index <= 50; index++){
    if( index %2 == 1 ){
        contador = contador +1
        console.log(index);
    }
}

/* console.log("De  0 al 50 extisten" + contador + "numeros que no son multiplos" )

var numeros = 0;

for (var index = 1; index < 50; index++) {
    if(index %2 == 0){
        console.log(index + "no son multiplos")
    }
    
} */