import express from "express";
import cors from "cors";
import { routerApi } from "./routes";

import {
  boomErrorHandler,
  errorHandler,
  logErrors,
} from "./middlewares/error.handler";
import morgan from "morgan";
import optionCors from "./config/optionCors";
// import swaggerUI from "swagger-ui-express";
// import swaggerJsDoc from "swagger-jsdoc";
// import { swaggerSpec } from "./docs/swaggerSpec";

import { sequelize } from "./database/database";
import "./models/index";

const app = express();
const port = 3000;

app.use(express.json());
app.use(morgan("dev"));
app.use(cors(optionCors));

app.get("/", (_, res) => {
  res.send("<h3>Hola desde mi servidor en express</h3>");
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

// app.use(
//   "/api-docs",
//   swaggerUI.serve,
//   swaggerUI.setup(swaggerJsDoc(swaggerSpec))
// );

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
