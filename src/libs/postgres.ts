import { Pool } from "pg";
import URI from "./URI";

export const pool: Pool = new Pool({ connectionString: URI });
