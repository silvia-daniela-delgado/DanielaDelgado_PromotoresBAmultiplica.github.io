//Funcion para Formulario de contacto
function enviarDatos(event) {
    event.preventDefault(); // Previene el comportamiento predeterminado del formulario al enviarlo
    // Obtiene los valores de los campos del formulario.
    var nombre = document.getElementById("nombre").value; //var es unapalabra clave que se utiliza para declarar una variable. "document": Es un objeto en JavaScript que representa el documento HTML actual. Puedes acceder a diferentes partes del documento y manipular su contenido a través de este objeto. "getElementById("nombre")"Es un método del objeto document que se utiliza para seleccionar un elemento del documento HTML por su atributo id. En este caso, estás seleccionando un elemento que tiene el atributo id con el valor "nombre". ".value" Una vez que has seleccionado el elemento con el atributo id "nombre", .value se utiliza para acceder al valor actual del elemento de formulario. En este caso, se asume que el elemento es un campo de entrada de texto, y .value te dará el texto que el usuario ha ingresado en ese campo.
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;
    // Aquí se puede realizar alguna acción con los datos del formulario, como enviarlos a un servidor
    // En este caso, se muestra una alerta con los datos introducidos.
    alert("Datos enviados:\nNombre: " + nombre + "\nEmail: " + email + "\nMensaje: " + mensaje);
    // Limpia el formulario después de enviar los datos.
    document.getElementById("formularioContacto").reset(); //Se utiliza para restablecer los valores de un formulario HTML a sus valores predeterminados. ".reset()": Es un método del objeto formulario que se utiliza para restablecer todos los campos dentro del formulario a sus valores predeterminados. Al llamar a este método en un formulario, se borrarán todos los campos de entrada, selección y área de texto, y cualquier opción seleccionada se restablecerá a su estado inicial.
}
// Función para mostrar una alerta de agradecimiento por la suscripción.
function mostrarAlertaSuscripcion() {
    alert("¡Gracias por suscribirte!");
}
// Agrega un "event listener" al botón de suscripción para mostrar la alerta de suscripción
document.getElementById("subscribe-button").addEventListener("click", mostrarAlertaSuscripcion); //document.getElementById("subscribe-button"): Utiliza la función document.getElementById() para seleccionar un elemento del documento HTML con el atributo id "subscribe-button", .addEventListener("click", mostrarAlertaSuscripcion): Agrega un "escuchador de eventos" al elemento seleccionado. El primer argumento "click" indica el tipo de evento que se está escuchando, en este caso, el evento de clic del ratón. El segundo argumento mostrarAlertaSuscripcion es el nombre de la función que se ejecutará cuando ocurra el evento de clic. 
// Definición de la función para detectar si el dispositivo es móvil
// Variable para rastrear si la alerta ya se mostró
let alertaMostrada = false;

// Función para detectar si el dispositivo es móvil
function detectarDispositivoMovil() {
    if (!alertaMostrada && window.innerWidth <= 768) {
        alert("¡Recomendamos rotar tu dispositivo para una mejor experiencia visual!");
        alertaMostrada = true; // Marca la alerta como mostrada para que no se vuelva a mostrar
    }
}

// Agrega un "escuchador de eventos" para el evento "load" (carga de la página)
window.addEventListener("load", detectarDispositivoMovil);

// Agrega un "escuchador de eventos" para el evento "resize" (redimensionamiento de la ventana)
window.addEventListener("resize", detectarDispositivoMovil);




