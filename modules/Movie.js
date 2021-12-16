const mongoose = require("mongoose")

const MovieSchema = new mongoose.Schema({
    movieName:{
        type: String,
        required: true,
    },
    movieReview:{
        type: String,
        required: true,
    },
});

const Movie = mongoose.model("Movie", MovieSchema, "movies");
module.exports = Movie;