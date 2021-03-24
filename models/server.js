const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.middlewares();
        this.routes();
    }

    middlewares() {
        // CORS
        this.app.use(cors());
        // BodyParse
        this.app.use(express.json());
    }

    routes() {
        this.app.get('/', (req, res) => {
            res.status(200).json({
                result: 'GET API'
            });
        });

        this.app.post('/', (req, res) => {

            const body = req.body;

            res.status(201).json({
                result: 'POST API',
                body
            });
        });
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor en puerto:', this.port);
        });
    }
}

module.exports = Server;