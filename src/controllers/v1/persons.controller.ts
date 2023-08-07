import { Request, Response } from "express";
import PersonsService from "../../services/v1/persons.services";
import { IPersons } from "../../interfaces";
import { getLimitOffset } from "../../utils/getLimitOffset";

const service = new PersonsService();

export const getPersons = async (req: Request, res: Response, next: any) => {
  try {
    const { l, o } = req.query;
    const limit = getLimitOffset(l, 10);
    const offset = getLimitOffset(o, 0);

    const listPersons = await service.findAll(limit, offset);

    const reslistPersons = {
      success: true,
      data: listPersons,
      message: "Ok",
      count: listPersons.length,
    };

    res.status(200).json(reslistPersons);
  } catch (error: any) {
    next(error);
  }
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
