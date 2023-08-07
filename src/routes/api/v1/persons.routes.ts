import { Router } from "express";
import {
  getPersons,
  createPerson,
} from "../../../controllers/v1/persons.controller";

const personsRouterV1 = Router();

personsRouterV1.get("/", getPersons);
personsRouterV1.post("/", createPerson);

export { personsRouterV1 };
