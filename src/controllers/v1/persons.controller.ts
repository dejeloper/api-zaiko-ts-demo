import { Request, Response } from "express";
import PersonsService from "../../services/v1/persons.services";
import { IPersons } from "../../interfaces";

const service = new PersonsService();

export const getPersons = (req: Request, res: Response) => {
  res.send("Get Persons");
};

export const createPerson = async (req: Request, res: Response, next: any) => {
  try {
    const {
      name,
      lastName,
      documentType,
      documentNumber,
      dateBirthday,
      state,
    } = req.body;

    const reqNewPerson: IPersons = {
      name,
      lastName,
      documentType,
      documentNumber,
      dateBirthday: new Date(dateBirthday),
      state,
    };

    const newPerson = await service.create(reqNewPerson);

    const resNewPerson = {
      success: true,
      data: newPerson,
      message: "Ok",
      count: 1,
    };

    res.status(201).json(resNewPerson);
  } catch (error: any) {
    next(error);
  }
};
