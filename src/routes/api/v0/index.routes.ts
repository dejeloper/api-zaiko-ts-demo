import express from "express";

const IndexRouter = express.Router();

IndexRouter.get("/", async (req, res) => {
  const message = "Este es un mensaje de prueba";
  res.status(201).json({ message });
});

export { IndexRouter };
