import { Sequelize } from "sequelize";
import URI from "../libs/URI";

export const sequelize = new Sequelize(URI);
