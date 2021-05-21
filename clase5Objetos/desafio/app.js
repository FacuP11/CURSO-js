


let auto = {

    marca: " Ford ",
    modelo: " Mustang ",
    version : " Shelby GT 500 ",
    potencia : " 360 cv (265 kw - 355 hp) ",
    motor : " 8 cilindros (motor en V) ",
    cilindrada : " 7016 cm3 ",
    velocidadMáxima : "233 km/h"


}
let moto = {
    marca: " Harley-Davidson ",
    modelo: " Touring Road King ",
    version : " 2016 ",
    potencia : " 86 cv ",
    motor : " 2 cilindros (motor en V) ",
    cilindrada : " 1690 cm3 ",
}


function Vehiculo (marca, modelo, version, potencia, motor, cilindrada) {
    this.marca = marca;
    this.modelo = modelo;
    this.version = version;
    this.potencia = potencia;
    this.motor = motor;
    this.cilindrada = cilindrada;

}

let descicion = prompt(" Puedes elegir entre AUTO / MOTO / OTRO ")

if (descicion == "AUTO") { 
    console.log (auto)
    document.write ("Usted ha elegido " + auto.marca + " " + auto.modelo + " " + auto.version )
}
else if (descicion == "MOTO") { 
    console.log (moto)
    document.write ("Usted ha elegido " + moto.marca + " " + moto.modelo + " " + moto.version )
}
else if (descicion == "OTRO") {

    let marca = prompt ("Indique la marca");
    let modelo = prompt ("Indique el modelo");
    let version = prompt ("Indique la version");
    let potencia = prompt ("Indique la potencia");
    let motor = prompt ("Indique el motor");
    let cilindrada = prompt ("Indique la cilindrada");

    const nuevoVehiculo = new Vehiculo (marca, modelo, version, potencia, motor, cilindrada);
    console.log("Usted ha elegido el siguiente vehiculo: ")
    console.table ( nuevoVehiculo);

    document.write ("Usted ha elegido <br>" + nuevoVehiculo.marca + " " + " " + nuevoVehiculo.modelo + " " + nuevoVehiculo.version );
}

else {
    alert("INDIQUE UN VALOR CORRECTO")
}






// const auto1 = new Vehiculo (  )