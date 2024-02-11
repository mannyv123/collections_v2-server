import { Knex } from "knex";
import usersData from "../seed_data/users";
import collectionsData from "../seed_data/collections";
import imagesData from "../seed_data/images";

export async function seed(knex: Knex): Promise<void> {
   // Deletes ALL existing entries
   await knex("follows").del();
   await knex("comments").del();
   await knex("likes").del();
   await knex("images").del();
   await knex("collections").del();
   await knex("users").del();

   // Inserts seed entries
   await knex("users").insert(usersData);
   await knex("collections").insert(collectionsData);
   await knex("images").insert(
      imagesData.map((image) => ({
         ...image,
         location: knex.raw(image.location),
      })),
   );
}
