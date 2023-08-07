import { Router } from "express";
import { createPerson } from "../../../controllers/v1/persons.controller";

const personsRouterV1 = Router();

personsRouterV1.post("/", createPerson);

export { personsRouterV1 };
