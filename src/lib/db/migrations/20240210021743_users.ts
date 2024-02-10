import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
   return knex.schema.createTable("users", (table) => {
      table.uuid("id").primary();
      table.string("username").notNullable().unique();
      table.string("password").notNullable();
      table.string("email").notNullable();
      table.string("first_name").notNullable();
      table.string("last_name").notNullable();
      table.string("city").notNullable();
      table.string("country").notNullable();
      table.string("profile_img").notNullable();
      table.string("cover_img").notNullable();
      table.timestamps(true, true);
   });
}

export async function down(knex: Knex): Promise<void> {
   return knex.schema.dropTable("users");
}
