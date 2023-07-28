import express from "express";

import { router as IndexRouterV0 } from "./api/v0/index.routes";

export const routerApi = (app: any) => {
  const routerv0 = express.Router();
  app.use("/api/v0", routerv0);

  routerv0.use("/persons", IndexRouterV0);
};
