const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");
const Mongoose  = require("mongoose");
const TripModel = require("../models/trip.model");


module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    // post trip
    app.post("/api/trip", [authJwt.verifyToken, authJwt.isModerator], async (request, response) => {
        try {
            var trip = new TripModel(request.body);
            var result = await trip.save();
            response.send(result);
        } catch (error) {
            response.status(500).send(error);
        }

    });


    // get trips
    app.get("/api/trips", [authJwt.verifyToken, authJwt.isModerator], async (request, response) => {
        try {
            var result = await TripModel.find().exec();
            response.send(result);
        } catch (error) {
            response.status(500).send(error);
        }
    });

    // get trip by id
    app.get("/api/trip/:id", [authJwt.verifyToken, authJwt.isModerator], async (request, response) => {
        try {
            var trip = await TripModel.findById(request.params.id).exec();
            response.send(trip);
        } catch (error) {
            response.status(500).send(error);
        }
    });

    // update trip by id
    app.put("/api/trip/:id", [authJwt.verifyToken, authJwt.isModerator], async (request, response) => {
        try {
            var trip = await TripModel.findById(request.params.id).exec();
            trip.set(request.body);
            var result = await trip.save();
            response.send(result);
        } catch (error) {
            response.status(500).send(error);
        }
    });

    // delete trip by id
    app.delete("/api/trip/:id", [authJwt.verifyToken, authJwt.isModerator], async (request, response) => {
        try {
            var result = await TripModel.deleteOne({ _id: request.params.id }).exec();
            response.send(result);
        } catch (error) {
            response.status(500).send(error);
        }
    });
};