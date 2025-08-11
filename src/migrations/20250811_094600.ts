import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "personal-website"."payload_locked_documents_rels"
    ADD COLUMN "contact_id" integer REFERENCES "personal-website"."contact"(id);
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "personal-website"."payload_locked_documents_rels"
    DROP COLUMN "contact_id";
  `)
}
