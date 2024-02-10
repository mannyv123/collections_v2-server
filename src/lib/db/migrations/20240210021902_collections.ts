import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
   return knex.schema.createTable("collections", (table) => {
      table.uuid("id").primary();
      table.string("title").notNullable();
      table.string("description").notNullable();
      table
         .foreign("user_id")
         .references("id")
         .inTable("users")
         .notNullable()
         .onUpdate("CASCADE")
         .onDelete("CASCADE");
   });
}

export async function down(knex: Knex): Promise<void> {
   return knex.schema.dropTable("collections");
}
