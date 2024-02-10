import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
   return knex.schema.createTable("follows", (table) => {
      table.uuid("id").primary();
      table
         .foreign("follower_id")
         .references("id")
         .inTable("users")
         .notNullable()
         .onUpdate("CASCADE")
         .onDelete("CASCADE");
      table
         .foreign("following_id")
         .references("id")
         .inTable("users")
         .notNullable()
         .onUpdate("CASCADE")
         .onDelete("CASCADE");
   });
}

export async function down(knex: Knex): Promise<void> {
   return knex.schema.dropTable("follows");
}
