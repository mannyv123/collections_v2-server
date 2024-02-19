import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
   return await knex.schema.createTable("collections", (table) => {
      table.uuid("id").primary();
      table.string("title").notNullable();
      table.string("description").notNullable();
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
   return await knex.schema.dropTable("collections");
}
