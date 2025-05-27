import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS "personal-website"."contact_socials" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "id" varchar PRIMARY KEY NOT NULL,
      "name" varchar,
      "logo_id" integer,
      "url" varchar NOT NULL
    );

    CREATE TABLE IF NOT EXISTS "personal-website"."contact" (
      "id" serial PRIMARY KEY NOT NULL,
      "name" varchar NOT NULL,
      "email" varchar NOT NULL,
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
    );

    CREATE TABLE IF NOT EXISTS "personal-website"."contact_locales" (
      "description" jsonb NOT NULL,
      "id" serial PRIMARY KEY NOT NULL,
      "_locale" "personal-website"."_locales" NOT NULL,
      "_parent_id" integer NOT NULL
    );

    CREATE TABLE IF NOT EXISTS "personal-website"."pages_blocks_contact" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "_path" text NOT NULL,
      "id" varchar PRIMARY KEY NOT NULL,
      "contact_id" integer,
      "block_name" varchar
    );

    CREATE TABLE IF NOT EXISTS "personal-website"."pages_blocks_contact_locales" (
      "title" varchar,
      "id" serial PRIMARY KEY NOT NULL,
      "_locale" "personal-website"."_locales" NOT NULL,
      "_parent_id" varchar NOT NULL
    );
  `)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "personal-website"."pages_blocks_introduction" CASCADE;
  DROP TABLE "personal-website"."pages_blocks_introduction_locales" CASCADE;
  DROP TABLE "personal-website"."pages_blocks_professional_timeline_timeline_entry" CASCADE;
  DROP TABLE "personal-website"."pages_blocks_professional_timeline_timeline_entry_locales" CASCADE;
  DROP TABLE "personal-website"."pages_blocks_professional_timeline" CASCADE;
  DROP TABLE "personal-website"."pages_blocks_projects_showcase_projects" CASCADE;
  DROP TABLE "personal-website"."pages_blocks_projects_showcase" CASCADE;
  DROP TABLE "personal-website"."pages_blocks_projects_showcase_locales" CASCADE;
  DROP TABLE "personal-website"."pages_blocks_choose_your_path_paths" CASCADE;
  DROP TABLE "personal-website"."pages_blocks_choose_your_path_paths_locales" CASCADE;
  DROP TABLE "personal-website"."pages_blocks_choose_your_path" CASCADE;
  DROP TABLE "personal-website"."pages_blocks_choose_your_path_locales" CASCADE;
  DROP TABLE "personal-website"."pages_blocks_experience_experiences" CASCADE;
  DROP TABLE "personal-website"."pages_blocks_experience" CASCADE;
  DROP TABLE "personal-website"."pages_blocks_experience_locales" CASCADE;
  DROP TABLE "personal-website"."pages_blocks_contact" CASCADE;
  DROP TABLE "personal-website"."pages_blocks_contact_locales" CASCADE;
  DROP TABLE "personal-website"."pages" CASCADE;
  DROP TABLE "personal-website"."pages_locales" CASCADE;
  DROP TABLE "personal-website"."users" CASCADE;
  DROP TABLE "personal-website"."media" CASCADE;
  DROP TABLE "personal-website"."project_technologies" CASCADE;
  DROP TABLE "personal-website"."project" CASCADE;
  DROP TABLE "personal-website"."project_locales" CASCADE;
  DROP TABLE "personal-website"."experience_technologies" CASCADE;
  DROP TABLE "personal-website"."experience" CASCADE;
  DROP TABLE "personal-website"."experience_locales" CASCADE;
  DROP TABLE "personal-website"."posts_populated_authors" CASCADE;
  DROP TABLE "personal-website"."posts" CASCADE;
  DROP TABLE "personal-website"."posts_locales" CASCADE;
  DROP TABLE "personal-website"."posts_rels" CASCADE;
  DROP TABLE "personal-website"."_posts_v_version_populated_authors" CASCADE;
  DROP TABLE "personal-website"."_posts_v" CASCADE;
  DROP TABLE "personal-website"."_posts_v_locales" CASCADE;
  DROP TABLE "personal-website"."_posts_v_rels" CASCADE;
  DROP TABLE "personal-website"."categories" CASCADE;
  DROP TABLE "personal-website"."categories_locales" CASCADE;
  DROP TABLE "personal-website"."contact_socials" CASCADE;
  DROP TABLE "personal-website"."contact" CASCADE;
  DROP TABLE "personal-website"."contact_locales" CASCADE;
  DROP TABLE "personal-website"."payload_jobs_log" CASCADE;
  DROP TABLE "personal-website"."payload_jobs" CASCADE;
  DROP TABLE "personal-website"."payload_locked_documents" CASCADE;
  DROP TABLE "personal-website"."payload_locked_documents_rels" CASCADE;
  DROP TABLE "personal-website"."payload_preferences" CASCADE;
  DROP TABLE "personal-website"."payload_preferences_rels" CASCADE;
  DROP TABLE "personal-website"."payload_migrations" CASCADE;
  DROP TYPE "personal-website"."_locales";
  DROP TYPE "personal-website"."enum_posts_status";
  DROP TYPE "personal-website"."enum__posts_v_version_status";
  DROP TYPE "personal-website"."enum__posts_v_published_locale";
  DROP TYPE "personal-website"."enum_payload_jobs_log_task_slug";
  DROP TYPE "personal-website"."enum_payload_jobs_log_state";
  DROP TYPE "personal-website"."enum_payload_jobs_task_slug";`)
}
