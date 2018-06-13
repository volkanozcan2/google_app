var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var app = express();
var io = app.io = require("socket.io")();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
let connectCounter = 0;
app.set("test", Math.random());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
io.on("connect", function(socket) {
    connectCounter++;

    io.emit("counter", { do: "add", id: socket.id });
    socket.on('chat message', function(msg) {
        io.emit('chat message', msg);
    });
    socket.on("disconnect", () => {
        connectCounter--;
        io.emit("counter", { do: "remove", id: socket.id });
    })
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
module.exports = app;