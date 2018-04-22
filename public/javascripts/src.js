$(function() {
    var socket = io();

    $(document).on("mousemove", function(event) {

        socket.emit("chat message", { x: event.pageX, y: event.pageY });
        $("#mp").text(event.pageX + " : " + event.pageY);
    });

    socket.on("chat message", (mes) => {
        $("#ws").text("with id of " + mes.id + " " + mes.x + " : " + mes.y);
    });
    socket.on("broadcast", (mes) => {
        console.log('new user with the id of ' + mes.id + " has connected");
    });
    socket.on("connect", (mes) => { console.log(mes); });
    socket.on("counter", (mes) => {
        $("#count").text(mes);
    })
})