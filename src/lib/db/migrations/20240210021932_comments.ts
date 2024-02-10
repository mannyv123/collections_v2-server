import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
   return knex.schema.createTable("comments", (table) => {
      table.uuid("id").primary();
      table.string("comment").notNullable();
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
         .inTable("users")
         .notNullable()
         .onUpdate("CASCADE")
         .onDelete("CASCADE");
   });
}

export async function down(knex: Knex): Promise<void> {
   return knex.schema.dropTable("comments");
}
