//Servidor de express
const express = require('express');
//Servidor de sockets
const http = require('http');
//Configuracion del socket server
const socketio = require('socket.io');

const path = require('path');
const Sockets = require('./sockets');

class Server {
    constructor() {
        this.app = express();
        this.port = 8080// process.env.PORT;

        //Http Server
        this.server = http.createServer(this.app);

        //Configuracion de sockets
        this.io = socketio(this.server, {/* Configuraciones */ });

    }
    execute() {
        console.log(process.env.PORT)
        //Inicialiazar middlewares
        this.middlewares();

        //Inicializar sockets
        this.configurarSockets();

        //Inicializar server
        this.server.listen(this.port, () => {
            console.log(`puerto corriendo en el puerto ${this.port}`);
        });
    }
    middlewares() {
        this.app.use(express.static(path.resolve(__dirname, '../public')))
    }
    configurarSockets() {
        new Sockets(this.io);
    }
}


module.exports = Server;