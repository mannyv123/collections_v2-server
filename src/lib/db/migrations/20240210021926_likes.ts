import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
   return await knex.schema.createTable("likes", (table) => {
      table.uuid("id").primary();
      table
         .uuid("image_id")
         .notNullable()
         .references("id")
         .inTable("images")
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
   return await knex.schema.dropTable("likes");
}
