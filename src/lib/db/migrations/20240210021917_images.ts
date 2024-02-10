import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
   return knex.schema.createTable("images", (table) => {
      table.uuid("id").primary();
      table.string("name").notNullable();
      table.point("latitude").notNullable();
      table.point("longitude").notNullable();
      table.string("city").notNullable();
      table.string("country").notNullable();
      table
         .foreign("collection_id")
         .references("id")
         .inTable("collections")
         .notNullable()
         .onUpdate("CASCADE")
         .onDelete("CASCADE");
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
   return knex.schema.dropTable("images");
}
