import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
   return await knex.schema.createTable("follows", (table) => {
      table.uuid("id").primary();
      table
         .uuid("follower_id")
         .notNullable()
         .references("id")
         .inTable("users")
         .onUpdate("CASCADE")
         .onDelete("CASCADE");
      table
         .uuid("following_id")
         .notNullable()
         .references("id")
         .inTable("users")
         .onUpdate("CASCADE")
         .onDelete("CASCADE");
   });
}

export async function down(knex: Knex): Promise<void> {
   return await knex.schema.dropTable("follows");
}
