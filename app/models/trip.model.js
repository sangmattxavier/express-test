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
    locations: [String],
    pins: [PinModel],
    participant_ids: {type: [String], required: true},
    itinerary_list: [String],
    supply_list: [String],
    has_map: Boolean
  })
);

module.exports = Trip;