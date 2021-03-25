const express = require('express');
const cors = require('cors');
const { databaseConnection } = require('../database/config');
const Diary = require('../models/diary');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.connectBD();
        this.middlewares();
        this.routes();
    }

    async connectBD() {
        await databaseConnection();
    }

    middlewares() {
        // CORS
        this.app.use(cors());
        // BodyParse
        this.app.use(express.json());
    }

    routes() {
        this.app.get('/', async (req, res) => {
            const diaries = await Diary.find();

            res.status(200).json({
                diaries
            });
        });

        this.app.post('/', async (req, res) => {

            const body = req.body;
            const diary = new Diary(body);

            await diary.save();

            res.status(201).json({
                diary
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