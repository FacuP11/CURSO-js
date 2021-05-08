console.time("ciclo")

let tanque =  prompt("Auto / Moto")
let distancia = parseFloat(prompt("Ingrese una distancia en km"))

if (tanque == "Auto") {
    tanque = parseInt(600)
    for (let i = 0 ; i <= distancia ; i=i+tanque ){

    
        document.write ("Antes del km " + i + " Se recomienda cargar combustible. <br>")  
    }
}
else if (tanque == "Moto") {
    tanque = parseInt(300)

    for (let i = 0 ; i <= distancia ; i=i+tanque ){

    
        document.write ("Antes del Km " + i + " se recomiendo cargar combustible. <br>")
    }
}
else {
    document.write("Ingrese una opcion de vehiculo")
}





//for (let i = 0 ; i <= distancia ; i=i+tanque ){

    
  //  document.write ("En el km " + i + " te quedas sin nafta <br>")

   








console.timeEnd("ciclo")

/*let numero = prompt("Ingrese un numero")

for ( let i = 0; i <= 10; i+=1) {
    let resultado = numero * i;
    document.write ( `${numero} * ${i} = ${resultado} <br>`)
}*/

/*for (let i = 0; i<10 ; i++){
    document.write( ` ${i} <br>`)
    if (i===5){
        break
    }
}*/

/**for (let i = 0; i<10 ; i++){
    
    if (i==5){
        continue;/* SALTEA  *
    }
    document.write( ` ${i} <br>`)
}**/

/*
let numero = parseFloat (prompt("Ingrese un nro"))
let valor = 1;
if (numero===0){
    document.write("1")
}
else {
    for (let i=1; i<numero+1 ; i+=1) {
        valor *= i 
    }
    document.write(`${valor}`)
}*/



/*let num = 5
while (num < 10){
    document.write("hola")
}*/

/*
let entrada = prompt ("Ingrese un dato")
while ( entrada != "ESC" ){
    document.write("La entrada es " + entrada)
}
*/

/*
do {
    let entrada = prompt("Ingrese un dato")
    alert   ("dato ingresado " + entrada)
}
while (entrada != "ESC")*/



/*
let numero = 0 
do {
    numero = prompt ("Ingrese un nro")
    document.write(numero)
}
while(parseInt(numero))
*/


/*
console.time ("Termina")

console.warn("Prueba1")
console.warn("Prueba2")
console.warn("Prueba3")
console.warn("Prueba4")
console.warn("Prueba5")
console.warn("Prueba6")


console.timeEnd("Termina")
*/


/* console.time ("tiempo")


metodoPago = prompt("Efectivo / cheque / tarjeta")
switch(metodoPago){
    case "Efectivo":
        console.log("pagaste con " + metodoPago)
        break;
    case "cheque":
        console.log ("pagaste con $" + metodoPago)
        break;
    case "tarjeta":
        console.log("pagaste con $" + metodoPago)
        break;
    default: 
    console.log("Metodo de pago invalido" + metodoPago)
}



console.timeEnd("tiempo") */

/* let entrada = prompt("Ingresar un nombre");
//Repetimos hasta que se ingresa "ESC"
while(entrada != "ESC" ){
   switch (entrada) {
       case "ANA":
            alert("HOLA ANA");
            break;
        case "JUAN":
            alert("HOLA JUAN");
            break;
       default:
           alert("¿QUIÉN SOS?")
           break;
   }
   entrada = prompt("Ingresar un nombre");
}
 */