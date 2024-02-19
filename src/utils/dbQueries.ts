import knex from "knex";
import config from "../lib/db/knexfile";

const db = knex(config.development);

// get collections from db
export const getAllCollections = async () => {
   return await db("collections");
};

// get single collection from db
export const getCollection = async (collectionId: string) => {
   return await db("collections").where({ id: collectionId });
};

// get images for single collection or all from db
export const getImages = async (collectionId?: string) => {
   if (collectionId) {
      return await db("images").where("collection_id", collectionId);
   } else {
      return await db("images");
   }
};
