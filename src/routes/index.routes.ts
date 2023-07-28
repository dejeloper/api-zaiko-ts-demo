import { Router } from "express";

const router = Router();

router.route("/").get((req, res) => {
  res.json("Welcome to my api");
});

router.route("/hola").get((req, res) => {
  res.json("Hola demo 2");
});

export default router;
