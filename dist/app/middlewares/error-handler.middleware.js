"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = function (err, req, res, next) {
    console.error(err === null || err === void 0 ? void 0 : err.stack);
    if ((err === null || err === void 0 ? void 0 : err.status) != 500) {
        return res === null || res === void 0 ? void 0 : res.status(err === null || err === void 0 ? void 0 : err.status).json({
            status: "error",
            message: "Oops, an err occurred",
            data: err,
        });
    }
    res === null || res === void 0 ? void 0 : res.status(500).json({
        status: "error",
        message: "Oops, an internal server error has occurred",
        data: err,
    });
};
