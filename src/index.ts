import express from "express";
import cors from "cors";
import { routerApi } from "./routes";

import {
  boomErrorHandler,
  errorHandler,
  logErrors,
} from "./middlewares/error.handler";
import morgan from "morgan";
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import path from "path";
import fs from "fs";

import { sequelize } from "./database/database";
import "./models/index";

const app = express();
const port = 3000;

app.use(express.json());
app.use(morgan("dev"));

const whitelist = [
  "http://localhost:3000",
  "http://127.0.0.1:5500",
  "https://api-zaiko.vercel.app",
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
  res.send("<h3>Hola desde mi servidor en express</h3>");
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

const routeDir = path.join(__dirname, "./routes/api/v0/");
const routerFiles = fs.readdirSync(routeDir).filter((file) => {
  const filePath = path.join(routeDir, file);
  return fs.statSync(filePath).isFile() && file.endsWith(".ts");
});

const swaggerSpec = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Zaiko - Api",
      version: "1.0",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
      {
        url: "https://api-zaiko.vercel.app",
      },
    ],
  },
  apis: routerFiles.map((file) => path.join(routeDir, file)),
};

app.use(
  "/api-docs",
  swaggerUI.serve,
  swaggerUI.setup(swaggerJsDoc(swaggerSpec))
);

async function conectionSEQ() {
  try {
    await sequelize.sync({ force: true });
    console.log("Conexión Ok");
  } catch (err) {
    console.log("Conexión bad", err);
  }
}

conectionSEQ();

app.listen(port, () => {
  console.log("Corriendo en el puerto: " + port);
});

export default app;
