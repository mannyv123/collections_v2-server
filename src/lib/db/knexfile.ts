import type { Knex } from "knex";
import { envConfig } from "../envConfig";

const config: { [key: string]: Knex.Config } = {
   development: {
      client: "mysql2",
      connection: {
         host: envConfig.database.DB_HOST,
         database: envConfig.database.DB_NAME,
         user: envConfig.database.DB_USER,
         password: envConfig.database.DB_USER,
      },
      pool: {
         min: 2,
         max: 10,
      },
      migrations: {
         directory: "./migrations",
      },
   },
};

module.exports = config;
