require("dotenv").config();
import express, { Express, Request, Response } from "express";
const PORT = process.env.PORT || 8000;
import path from "node:path";
import { blob } from "stream/consumers";
const errorHandlingMiddleware = require("./app/middlewares/error-handler.middleware");

const app: Express = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./app/routes/main.routes")(app);

// error handler
app.use(errorHandlingMiddleware);

app.listen(PORT, () => {
  // console.log(`Listening on port ${PORT}`);
  console.log(`💡⚡️[server]: Server is running at http://localhost:${PORT}`);
});
