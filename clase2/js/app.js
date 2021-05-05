
/*const puntaje = prompt ("Ingrese si puntaje");

if (puntaje == 1000){
    document.write ("si es ese nro<br>")
}
else {   
    document.write ("No es igual<br>")
}

let dinero = prompt ("Ingrese su dinero");
let totalcarrito = prompt ("Ingrese su gasto");

if (dinero > totalcarrito){
    document.write ("<p>Pago correcto<p>")
}

else if (dinero == totalcarrito) {
    document.write ("<p> Pago correcto")
}
else {
    document.write ("<p> Saldo insuficiente")
} */


/*
let fondos = Number (prompt ("Ingrese dinero disponible"))


let gastoMensual = Number (prompt ("Indique cuanto quiere gastar en un mes"))


let ahorro = Number( prompt ("¿Cuanto dinero quiere ahorrar?"))


let resto = parseInt (fondos - (gastoMensual + ahorro))


if (resto < fondos) {
    document.write ("Usted tiene $" + (resto) + " de fondos restantes y puede ahorrar " + (fondos - gastoMensual) )
}
else if ((ahorro + gastoMensual) == fondos){
    document.write ("Fondos suficientes para gastos.")
}
else  {
    document.write ("Verifique sus fondos")
}
*/


let nombre = prompt ("¿Cual es su nombre?")
let peso = parseInt (prompt("¿Cual es su peso en kg?"))
let altura = parseInt (prompt("¿Cual es su estatura en cm?"))
altura = altura / 100
let IMC = peso / Math.pow (altura,2) 
document.write ("<p>Hola " + nombre + " su IMC es " + IMC.toFixed(3))

if (18.5 > IMC ) {
    document.write("<p>Su nivel de peso es BAJO")
}
else if (24.999 > IMC > 18.5) {
    document.write("<p>Su nivel de peso es NORMAL")
}
else if ((IMC > 25) && ( IMC < 29.999)){
    document.write ("<p>Su nivel de peso es SOBREPESO")
}
else if (30 < IMC) {
    document.write("<p>Su nivel de peso es OBESO")
}






