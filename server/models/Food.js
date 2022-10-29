const { Schema } = require('mongoose');

const foodSchema = new Schema({
    name: [
        {
            type: String,
        },
    ],
    description: {
        type: String,
        required: true,
    },
    foodId: {
        type: String,
        required: true,
    },
    image: { 
        type: String,
    },
    link: {
        type: String,
    },
    calories: {
        type: String,
        required: true,
    },
});

module.exports = foodSchema;