"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const PORT = process.env.PORT || 8000;
const node_path_1 = __importDefault(require("node:path"));
const errorHandlingMiddleware = require("./app/middlewares/error-handler.middleware");
const app = (0, express_1.default)();
app.use(express_1.default.static(node_path_1.default.join(__dirname, "public")));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
require("./app/routes/main.routes")(app);
// error handler
app.use(errorHandlingMiddleware);
app.listen(PORT, () => {
    // console.log(`Listening on port ${PORT}`);
    console.log(`💡⚡️[server]: Server is running at http://localhost:${PORT}`);
});
