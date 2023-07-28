import { config } from "../config/config";

const USER = encodeURIComponent(config.user_db);
const PASS = encodeURIComponent(config.password_db);
export const URI = `postgresql://${USER}:${PASS}@${config.host_db}:${config.port_db}/${config.name_db}`;
