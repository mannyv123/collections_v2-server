import type { Knex } from "knex";
import * as dotenv from "dotenv";

dotenv.config({ path: "../../../.env" });

const config: { [key: string]: Knex.Config } = {
   development: {
      client: "mysql2",
      connection: {
         host: process.env.DB_HOST,
         database: process.env.DB_NAME,
         user: process.env.DB_USER,
         password: process.env.DB_PASSWORD,
      },
      pool: {
         min: 2,
         max: 10,
      },
      migrations: {
         directory: "./migrations",
      },
      seeds: {
         directory: "./seeds",
      },
   },
};

module.exports = config;
