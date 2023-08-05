import express from "express";
import { IndexService } from "./../../../services/v0/index.services";
import { getLimitOffset } from "../../../utils/getLimitOffset";

const router = express.Router();
const service = new IndexService();

/**
 * @swagger
 * /api/v0/persons:
 *  get:
 *    summary: Get all Persons
 *    tags:
 *      - Persons
 *    responses:
 *      200:
 *        description: all persons
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 */
router.get("/", async (req, res, next) => {
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

export { router };
