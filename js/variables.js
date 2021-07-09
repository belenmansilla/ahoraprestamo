let nombre = prompt("Nombre Completo");
let monto = prompt("Monto deseado en pesos");
let mail = prompt("Ingresá tu correo electrónico");

if (monto <= 1000) {
    alert ("Hola " + nombre + " tu solicitud de prestamo por un monto de " + monto + " fue aprobado. Te llegará un mail al correo: " + mail + " en las próximas 24 horas hábiles para que puedas retirar tu dinero.");
}
else if (monto > 1000) {
    alert ("Hola " + nombre + " tu solicitud de prestamo por un monto de " + monto + " está en revisión. Te llegará un mail al correo: " + mail + " en las próximas 24 horas hábiles con el estado de tu solicitud.");
}

console.log("El usuario solicitó un prestamo de " + monto)