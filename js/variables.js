let nombre = prompt("Nombre Completo");
let mail = prompt("Ingresá tu correo electrónico");
let monto = prompt("Monto deseado en pesos");
let cuotas = prompt("Ingrese la cantidad de cuotas que te gustaría");
let seguir = prompt("¿Te gustaría cotizar otro prestamo? Y/N");

while (seguir == "Y") {
    monto = prompt("Monto deseado en pesos");
    cuotas = prompt("Ingrese la cantidad de cuotas que te gustaría");
    seguir = prompt("¿Te gustaría cotizar otro prestamo? Y/N");
}

if (monto <= 1000) {
alert ("Hola " + nombre + " tu solicitud de prestamo por un monto de " + monto + " fue aprobado. \n \nTe llegará un mail al correo: " + mail + " en las próximas 24 horas hábiles para que puedas retirar tu dinero.");
}
else {
    alert ("Hola " + nombre + " tu solicitud de prestamo por un monto de " + monto + " está en revisión.\n \nTe llegará un mail al correo: " + mail + " en las próximas 24 horas hábiles con el estado de tu solicitud.");
}

