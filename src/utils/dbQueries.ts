import knex from "knex";
import config from "../lib/db/knexfile";
import { UserCollection } from "../lib/types/types";

const db = knex(config.development);

// get collections from db
export const getAllCollections = async () => {
   return await db("collections");
};

// get single collection from db
export const getCollection = async (collectionId: string) => {
   const collection = (await db
      .select(["collections.*", "users.username"])
      .from("collections")
      .join("users", { "users.id": "collections.user_id" })
      .where({ "collections.id": collectionId })) as UserCollection[];

   return collection;
};

// get images for single collection or all from db
export const getImages = async (collectionId?: string) => {
   if (collectionId) {
      return await db("images").where("collection_id", collectionId);
   } else {
      return await db("images");
   }
};

// get single image details
export const getSingleImageFromDb = async (imageId: string) => {
   const image = await db("images").where("id", imageId);
   return image;
};
