const mongoose = require("mongoose");

const Pin = require('./pin.model')
const Trip = mongoose.model(
  "Trip",
  new mongoose.Schema({
    title: {type: String, required: true},
    type: {type: String, required: true},
    start_date: Date,
    end_date: Date,
    duration: Number,
    locations: [String],
    pins: [{
      location: String,
      comment: String,
      start_time: Date,
      end_time: Date,
      duration: Number,
      votes: Number,
      vote_max: Number
    }],
    participant_ids: {type: [String], required: true},
    pending_invites: [String],
    itinerary_list: [String],
    supply_list: [String],
    has_map: Boolean
  })
);

module.exports = Trip;