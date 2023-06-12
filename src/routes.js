const express = require("express");
const routes = express.Router();

const CapController = require("../Controller/CapController");
const SpaceshipController = require("../Controller/SpaceshipController");

routes.post("/cap", CapController.store);
routes.get("/cap", CapController.index);

routes.post("/caps/:capId/spaceships", SpaceshipController.store);
routes.get("/caps/:capId/spaceships", SpaceshipController.index);

module.exports = routes;