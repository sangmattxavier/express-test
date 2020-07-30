const mongoose = require("mongoose");

const PinModel = require('./pin.model')
const Trip = mongoose.model(
  "Trip",
  new mongoose.Schema({
    title: {type: String, required: true},
    type: {type: String, required: true},
    start_date: Date,
    end_date: Date,
    duration: Number,
    list_of_locations: [String],
    list_of_pins: [PinModel],
    // list_of_participants: [User],
    itinerary_list: [String],
    supply_list: [String],
    has_map: Boolean
  })
);

module.exports = Trip;