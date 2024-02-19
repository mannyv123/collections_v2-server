import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
   return await knex.schema.createTable("images", (table) => {
      table.uuid("id").primary();
      table.string("name").notNullable();
      table.point("location").notNullable();
      table.string("city").notNullable();
      table.string("country").notNullable();
      table
         .uuid("collection_id")
         .notNullable()
         .references("id")
         .inTable("collections")
         .onUpdate("CASCADE")
         .onDelete("CASCADE");

      table
         .uuid("user_id")
         .notNullable()
         .references("id")
         .inTable("users")
         .onUpdate("CASCADE")
         .onDelete("CASCADE");
      table.timestamps(true, true);
   });
}

export async function down(knex: Knex): Promise<void> {
   return await knex.schema.dropTable("images");
}
