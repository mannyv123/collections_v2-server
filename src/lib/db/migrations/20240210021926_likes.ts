import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
   return knex.schema.createTable("likes", (table) => {
      table.uuid("id").primary();
      table
         .foreign("image_id")
         .references("id")
         .inTable("images")
         .notNullable()
         .onUpdate("CASCADE")
         .onDelete("CASCADE");
      table
         .foreign("user_id")
         .references("id")
         .inTable("user")
         .notNullable()
         .onUpdate("CASCADE")
         .onDelete("CASCADE");
   });
}

export async function down(knex: Knex): Promise<void> {
   return knex.schema.dropTable("likes");
}
