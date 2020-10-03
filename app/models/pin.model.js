const Mongoose  = require("mongoose");

const Pin = Mongoose.model("pin", {
    location: String,
    comment: String,
    start_time: Date,
    end_time: Date,
    duration: Number,
    votes: Number,
    vote_max: Number
});

module.exports = Pin;