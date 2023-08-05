import boom from "@hapi/boom";
import { pool } from "../../libs/postgres";

export class IndexService {
  private pool;

  constructor() {
    this.pool = pool;
    this.pool.on("error", (err) =>
      console.error("Error en el pool de conexión: ", err)
    );
  }

  async find(limit: number, offset: number) {
    try {
      const query = `SELECT * FROM public.personsactives(${limit}, ${offset});`;
      const result = await this.pool.query(query);

      return {
        success: true,
        data: result.rows,
        message: "Ok",
        count: result.rowCount,
      };
    } catch (error) {
      if (error instanceof Error) {
        throw boom.badGateway(error.message);
      } else {
        throw boom.badGateway((error as Error).message);
      }
    }
  }
}
