import knex from "knex";
import config from "./knexfile";

const db = knex(config.development);

// get collections
export const getAllCollections = async () => {
   return await db("collections");
};
