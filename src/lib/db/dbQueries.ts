import knex from "knex";
import config from "./knexfile";

const db = knex(config.development);

// get collections from db
export const getAllCollections = async () => {
   return await db("collections");
};

// get single collection from db
export const getCollection = async (collectionId: string) => {
   return await db("collections").where({ id: collectionId });
};
