var socket = io();

var label = $('#lblNuevoTicket');

//Escuchar sucesos on
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

//Escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});

//on 'estadoActual' 
socket.on('estadoActual', function(resp) {
    label.text(resp.actual);
});

$('button').on('click', function() {

    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);
    });

});