const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");
const UserModel = require("../models/user.model");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);

  app.get(
    "/api/test/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );

  // update user
  app.put("/api/user/:id", [authJwt.verifyToken], async (request, response) => {
    try {
        var user = await UserModel.findById(request.params.id).exec();
        user.set(request.body);
        var result = await user.save();
        response.status(200).send(result);
    } catch (error) {
        response.status(500).send(error);
    }
  });
};