import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

// Create schema
const superheroesSchema = mongoose.Schema({
    heroName: {
        type: String,
        required: true, 
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String
    },
    image: {
        type: String,
    },
    description: {
        type: String
    }
}, { timestamps: true }); // Automatic timestamp

// Apply the unique validator plugin to the schema
superheroesSchema.plugin(mongooseUniqueValidator);

// Create model
const Superheroes = mongoose.model("superheroes", superheroesSchema);

export default Superheroes;
