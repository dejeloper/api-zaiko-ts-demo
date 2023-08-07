import express from "express";

import { IndexService } from "./../../../services/v0/index.services";
import { getLimitOffset } from "../../../utils/getLimitOffset";

const indexRouterV0 = express.Router();
const service = new IndexService();

indexRouterV0.get("/", async (req, res, next) => {
  try {
    const { l, o } = req.query;
    const limit = getLimitOffset(l, 10);
    const offset = getLimitOffset(o, 0);

    const persons = await service.find(limit, offset);
    res.json(persons);
  } catch (error) {
    next(error);
  }
});

export { indexRouterV0 };
