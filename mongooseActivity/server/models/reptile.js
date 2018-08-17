const mongoose = require("mongoose");

const ReptilesSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Name is required."]}, 
    species: {type: String, required: [true, "Species is required."]},
    personality: {type: String, required: [true, "Personality is required."]},
    age: {type: Number, required: [true, "Age is required."]},
   }, {timestamps: true})

mongoose.model('Reptile', ReptilesSchema);