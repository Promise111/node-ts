import {Express} from "express"

module.exports = function (app:Express) {
  const router = require("express").Router();
  const controller = require("../controllers/main.controller");

  router.get("/", controller.mainController);

  app.use("/api", router);
};
