"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = function (app) {
    const router = require("express").Router();
    const controller = require("../controllers/main.controller");
    router.get("/", controller.mainController);
    app.use("/api", router);
};
