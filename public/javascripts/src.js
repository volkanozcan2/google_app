$(function() {
    var socket = io();
    $(document).on("mousemove", function(event) {

        socket.emit("chat message", { x: event.pageX, y: event.pageY });
        $("#mp").text(event.pageX + " : " + event.pageY);
    });

    socket.on("chat message", (mes) => {
        $("#ws").text(mes.x + " : " + mes.y);
        console.log(mes);
    });
})