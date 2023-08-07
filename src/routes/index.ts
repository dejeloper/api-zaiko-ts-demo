import express from "express";

import { indexRouterV0 } from "./api/v0/index.routes";

export const routerApi = (app: any) => {
  const routerv0 = express.Router();
  app.use("/api/v0", routerv0);
  routerv0.use("/persons", indexRouterV0);
};
