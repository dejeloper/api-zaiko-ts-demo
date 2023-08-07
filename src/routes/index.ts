import express from "express";

import { indexRouterV0 } from "./api/v0/index.routes";
import { personsRouterV1 } from "./api/v1/persons.routes";

export const routerApi = (app: any) => {
  const routerv0 = express.Router();
  app.use("/api/v0", routerv0);
  routerv0.use("/persons", indexRouterV0);

  const routerv1 = express.Router();
  app.use("/api/v1", routerv1);
  routerv1.use("/persons", personsRouterV1);
};
