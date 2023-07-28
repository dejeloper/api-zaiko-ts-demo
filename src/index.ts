import express from "express";
import cors from "cors";
import { routerApi } from "./routes";

import {
  boomErrorHandler,
  errorHandler,
  logErrors,
} from "./middlewares/error.handler";
import morgan from "morgan";

const app = express();
const port = 3000;

app.use(express.json());
app.use(morgan("dev"));

const whitelist = [
  "http://localhost:3000",
  "http://127.0.0.1:5500",
  "https://backend-zaiko.vercel.app",
];

const option = {
  origin: (origin: any, callback: any) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("No Permitido"));
    }
  },
};

app.use(cors(option));

app.get("/", (req, res) => {
  res.send("Hola desde mi servidor en express");
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log("Corriendo en el puerto: " + port);
});

export default app;
