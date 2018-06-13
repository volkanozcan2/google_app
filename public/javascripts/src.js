$(function() {
    var socket = io();

    $(document).on("mousemove", function(event) {
        let pos = { x: event.pageX, y: event.pageY };
        socket.emit("chat message", { id: socket.id, pos: pos });
        $("#mp").text(event.pageX + " : " + event.pageY);
    });

    socket.on("chat message", (mes) => {
        $(`#${mes.id}`).text(`${mes.pos.x}:${mes.pos.y}`);
    });
    socket.on("broadcast", (mes) => {
        console.log('new user with the id of ' + mes.id + " has connected");
    });
    socket.on("connect", (mes) => { console.log(mes); });
    socket.on("counter", (mes) => {
        console.log(mes.id);

        if (mes.do == "add") {
            $("#addtothis").append(`<p id="${mes.id}">${mes.id}<p>`);
        } else if (mes.do == "remove") {
            $(`#${mes.id}`).remove();
        }
    })
})