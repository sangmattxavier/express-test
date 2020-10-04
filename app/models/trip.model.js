const mongoose = require("mongoose");

const Trip = mongoose.model(
  "Trip",
  new mongoose.Schema({
    title: {
      type: String, required: true
    },
    type: {
      type: String, required: true
    },
    participant_ids: {type: [String], required: true},
    start_date: Date,
    end_date: Date,
    locations: [{
      label: String,
      address: String,
      lat: Number,
      long: Number,
    }],
    pending_invites: [String],
    pins: [{
      long: Number,
      lat: Number,
      comment: {
        label: String,
        user: String,
      },
      start_time: Date,
      end_time: Date,
      vote_up: Number,
      vote_down: Number,
    }],
    itinerary_list: [{
      day: Date,
      label: String,
    }],
    supply_list: [{
      label: String,
      quantity: Number,
      assigned: [String],
    }]
  })
);

module.exports = Trip;