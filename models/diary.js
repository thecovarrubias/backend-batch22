const { Schema, model } = require('mongoose');

const DiarySchema = Schema({

    date: {
        type: Date,
        required: [true, 'La fecha es obligatoria']
    },
    feel: {
        type: String,
        required: [true, 'El sentimiento es obligatorio']
    },
    description: {
        type: String,
        required: [true, 'La descripción es obligatoria']
    },
    url_image: {
        type: String,
        required: [true, 'La imagen es obligatoria']
    },
    timestamp: { 
        type : Date, 
        default: Date.now() 
    }

});

module.exports = model('Diary', DiarySchema);