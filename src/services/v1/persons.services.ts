import boom from "@hapi/boom";
import { pool } from "../../libs/postgres";
import { PersonsModel } from "../../models";
import { IPersons } from "../../interfaces";

class PersonsService {
  private pool: any;

  constructor() {
    this.pool = pool;
    this.pool.on("error", (err: any) =>
      console.error("Error en el pool de conexión: ", err)
    );
  }

  async findAll(limit: number, offset: number) {
    try {
      const listPersons = await PersonsModel.findAll();

      return listPersons;
    } catch (error) {
      throw boom.badGateway("Error al consultar Personas");
    }
  }

  async create(person: IPersons) {
    try {
      const {
        name,
        lastName,
        documentType,
        documentNumber,
        dateBirthday,
        state,
      } = person;

      const newPerson = await PersonsModel.create({
        name,
        lastName,
        documentType,
        documentNumber,
        dateBirthday,
        state,
      });

      return newPerson;
    } catch (error: any) {
      if (error.name === "SequelizeUniqueConstraintError") {
        throw boom.badGateway(
          "Error al crear Persona: El número de documento debe ser único."
        );
      } else {
        throw boom.badGateway("Error al crear Persona: " + error);
      }
    }
  }
}

export default PersonsService;
