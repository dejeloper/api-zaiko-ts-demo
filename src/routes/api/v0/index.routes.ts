import express from "express";

import { IndexService } from "./../../../services/v0/index.services";

const router = express.Router();
const service = new IndexService();

router.get("/", async (req, res, next) => {
  try {
    const persons = await service.find();
    res.json(persons);
  } catch (error) {
    next(error);
  }
});

export { router };
