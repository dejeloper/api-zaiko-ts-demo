import express from "express";

import { IndexRouter } from "./api/v0/index.routes";

export const routerApi = (app: any) => {
  const routerv0 = express.Router();
  app.use("/api/v0", routerv0);

  routerv0.use("/inicio", IndexRouter);
};
