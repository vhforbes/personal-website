import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    DO $$ BEGIN
      CREATE TYPE "personal-website"."_locales" AS ENUM('en', 'pt');
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    DO $$ BEGIN
      CREATE TYPE "personal-website"."enum_posts_status" AS ENUM('draft', 'published');
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    DO $$ BEGIN
      CREATE TYPE "personal-website"."enum__posts_v_version_status" AS ENUM('draft', 'published');
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    DO $$ BEGIN
      CREATE TYPE "personal-website"."enum__posts_v_published_locale" AS ENUM('en', 'pt');
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    DO $$ BEGIN
      CREATE TYPE "personal-website"."enum_payload_jobs_log_task_slug" AS ENUM('inline', 'schedulePublish');
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    DO $$ BEGIN
      CREATE TYPE "personal-website"."enum_payload_jobs_log_state" AS ENUM('failed', 'succeeded');
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    DO $$ BEGIN
      CREATE TYPE "personal-website"."enum_payload_jobs_task_slug" AS ENUM('inline', 'schedulePublish');
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;
  `)

  await db.execute(sql`
   CREATE TYPE "personal-website"."_locales" AS ENUM('en', 'pt');
  CREATE TYPE "personal-website"."enum_posts_status" AS ENUM('draft', 'published');
  CREATE TYPE "personal-website"."enum__posts_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "personal-website"."enum__posts_v_published_locale" AS ENUM('en', 'pt');
  CREATE TYPE "personal-website"."enum_payload_jobs_log_task_slug" AS ENUM('inline', 'schedulePublish');
  CREATE TYPE "personal-website"."enum_payload_jobs_log_state" AS ENUM('failed', 'succeeded');
  CREATE TYPE "personal-website"."enum_payload_jobs_task_slug" AS ENUM('inline', 'schedulePublish');
  CREATE TABLE IF NOT EXISTS "personal-website"."pages_blocks_introduction" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "personal-website"."pages_blocks_introduction_locales" (
  	"title" varchar,
  	"body_text" jsonb,
  	"picture_id" integer,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "personal-website"."_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "personal-website"."pages_blocks_professional_timeline_timeline_entry" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "personal-website"."pages_blocks_professional_timeline_timeline_entry_locales" (
  	"year" varchar,
  	"title" varchar,
  	"text" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "personal-website"."_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "personal-website"."pages_blocks_professional_timeline" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_id" integer NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "personal-website"."pages_blocks_projects_showcase_projects" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"project_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "personal-website"."pages_blocks_projects_showcase" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "personal-website"."pages_blocks_projects_showcase_locales" (
  	"title" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "personal-website"."_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "personal-website"."pages_blocks_choose_your_path_paths" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"saber_color" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "personal-website"."pages_blocks_choose_your_path_paths_locales" (
  	"name" varchar NOT NULL,
  	"link" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "personal-website"."_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "personal-website"."pages_blocks_choose_your_path" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "personal-website"."pages_blocks_choose_your_path_locales" (
  	"title" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "personal-website"."_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "personal-website"."pages_blocks_experience_experiences" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"experience_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "personal-website"."pages_blocks_experience" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "personal-website"."pages_blocks_experience_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "personal-website"."_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
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
  
  CREATE TABLE IF NOT EXISTS "personal-website"."pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_title" varchar,
  	"hero_media_id" integer,
  	"slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "personal-website"."pages_locales" (
  	"title" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "personal-website"."_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "personal-website"."users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "personal-website"."media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar NOT NULL,
  	"_key" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE IF NOT EXISTS "personal-website"."project_technologies" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"technology_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "personal-website"."project" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"url" varchar NOT NULL,
  	"media_id" integer NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "personal-website"."project_locales" (
  	"name" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "personal-website"."_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "personal-website"."experience_technologies" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"technology_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "personal-website"."experience" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"url" varchar NOT NULL,
  	"period" varchar NOT NULL,
  	"logo_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "personal-website"."experience_locales" (
  	"description" jsonb NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "personal-website"."_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "personal-website"."posts_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "personal-website"."posts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar,
  	"hero_image_id" integer,
  	"content_snippet" varchar,
  	"published_at" timestamp(3) with time zone,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "personal-website"."enum_posts_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "personal-website"."posts_locales" (
  	"title" varchar,
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "personal-website"."_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "personal-website"."posts_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"posts_id" integer,
  	"categories_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "personal-website"."_posts_v_version_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "personal-website"."_posts_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_slug" varchar,
  	"version_hero_image_id" integer,
  	"version_content_snippet" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "personal-website"."enum__posts_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "personal-website"."enum__posts_v_published_locale",
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "personal-website"."_posts_v_locales" (
  	"version_title" varchar,
  	"version_content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "personal-website"."_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "personal-website"."_posts_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"posts_id" integer,
  	"categories_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "personal-website"."categories" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "personal-website"."categories_locales" (
  	"title" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "personal-website"."_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
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
  
  CREATE TABLE IF NOT EXISTS "personal-website"."payload_jobs_log" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"executed_at" timestamp(3) with time zone NOT NULL,
  	"completed_at" timestamp(3) with time zone NOT NULL,
  	"task_slug" "personal-website"."enum_payload_jobs_log_task_slug" NOT NULL,
  	"task_i_d" varchar NOT NULL,
  	"input" jsonb,
  	"output" jsonb,
  	"state" "personal-website"."enum_payload_jobs_log_state" NOT NULL,
  	"error" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "personal-website"."payload_jobs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"input" jsonb,
  	"completed_at" timestamp(3) with time zone,
  	"total_tried" numeric DEFAULT 0,
  	"has_error" boolean DEFAULT false,
  	"error" jsonb,
  	"task_slug" "personal-website"."enum_payload_jobs_task_slug",
  	"queue" varchar DEFAULT 'default',
  	"wait_until" timestamp(3) with time zone,
  	"processing" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "personal-website"."payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "personal-website"."payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"users_id" integer,
  	"media_id" integer,
  	"project_id" integer,
  	"experience_id" integer,
  	"posts_id" integer,
  	"categories_id" integer,
  	"contact_id" integer,
  	"payload_jobs_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "personal-website"."payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "personal-website"."payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "personal-website"."payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."pages_blocks_introduction" ADD CONSTRAINT "pages_blocks_introduction_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "personal-website"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."pages_blocks_introduction_locales" ADD CONSTRAINT "pages_blocks_introduction_locales_picture_id_media_id_fk" FOREIGN KEY ("picture_id") REFERENCES "personal-website"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."pages_blocks_introduction_locales" ADD CONSTRAINT "pages_blocks_introduction_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "personal-website"."pages_blocks_introduction"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."pages_blocks_professional_timeline_timeline_entry" ADD CONSTRAINT "pages_blocks_professional_timeline_timeline_entry_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "personal-website"."pages_blocks_professional_timeline"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."pages_blocks_professional_timeline_timeline_entry_locales" ADD CONSTRAINT "pages_blocks_professional_timeline_timeline_entry_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "personal-website"."pages_blocks_professional_timeline_timeline_entry"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."pages_blocks_professional_timeline" ADD CONSTRAINT "pages_blocks_professional_timeline_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "personal-website"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."pages_blocks_professional_timeline" ADD CONSTRAINT "pages_blocks_professional_timeline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "personal-website"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."pages_blocks_projects_showcase_projects" ADD CONSTRAINT "pages_blocks_projects_showcase_projects_project_id_project_id_fk" FOREIGN KEY ("project_id") REFERENCES "personal-website"."project"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."pages_blocks_projects_showcase_projects" ADD CONSTRAINT "pages_blocks_projects_showcase_projects_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "personal-website"."pages_blocks_projects_showcase"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."pages_blocks_projects_showcase" ADD CONSTRAINT "pages_blocks_projects_showcase_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "personal-website"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."pages_blocks_projects_showcase_locales" ADD CONSTRAINT "pages_blocks_projects_showcase_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "personal-website"."pages_blocks_projects_showcase"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."pages_blocks_choose_your_path_paths" ADD CONSTRAINT "pages_blocks_choose_your_path_paths_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "personal-website"."pages_blocks_choose_your_path"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."pages_blocks_choose_your_path_paths_locales" ADD CONSTRAINT "pages_blocks_choose_your_path_paths_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "personal-website"."pages_blocks_choose_your_path_paths"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."pages_blocks_choose_your_path" ADD CONSTRAINT "pages_blocks_choose_your_path_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "personal-website"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."pages_blocks_choose_your_path_locales" ADD CONSTRAINT "pages_blocks_choose_your_path_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "personal-website"."pages_blocks_choose_your_path"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."pages_blocks_experience_experiences" ADD CONSTRAINT "pages_blocks_experience_experiences_experience_id_experience_id_fk" FOREIGN KEY ("experience_id") REFERENCES "personal-website"."experience"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."pages_blocks_experience_experiences" ADD CONSTRAINT "pages_blocks_experience_experiences_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "personal-website"."pages_blocks_experience"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."pages_blocks_experience" ADD CONSTRAINT "pages_blocks_experience_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "personal-website"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."pages_blocks_experience_locales" ADD CONSTRAINT "pages_blocks_experience_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "personal-website"."pages_blocks_experience"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."pages_blocks_contact" ADD CONSTRAINT "pages_blocks_contact_contact_id_contact_id_fk" FOREIGN KEY ("contact_id") REFERENCES "personal-website"."contact"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."pages_blocks_contact" ADD CONSTRAINT "pages_blocks_contact_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "personal-website"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."pages_blocks_contact_locales" ADD CONSTRAINT "pages_blocks_contact_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "personal-website"."pages_blocks_contact"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."pages" ADD CONSTRAINT "pages_hero_media_id_media_id_fk" FOREIGN KEY ("hero_media_id") REFERENCES "personal-website"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."pages_locales" ADD CONSTRAINT "pages_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "personal-website"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."project_technologies" ADD CONSTRAINT "project_technologies_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "personal-website"."project"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."project" ADD CONSTRAINT "project_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "personal-website"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."project_locales" ADD CONSTRAINT "project_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "personal-website"."project"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."experience_technologies" ADD CONSTRAINT "experience_technologies_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "personal-website"."experience"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."experience" ADD CONSTRAINT "experience_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "personal-website"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."experience_locales" ADD CONSTRAINT "experience_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "personal-website"."experience"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."posts_populated_authors" ADD CONSTRAINT "posts_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "personal-website"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."posts" ADD CONSTRAINT "posts_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "personal-website"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."posts_locales" ADD CONSTRAINT "posts_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "personal-website"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."posts_rels" ADD CONSTRAINT "posts_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "personal-website"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."posts_rels" ADD CONSTRAINT "posts_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "personal-website"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."posts_rels" ADD CONSTRAINT "posts_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "personal-website"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."posts_rels" ADD CONSTRAINT "posts_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "personal-website"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."_posts_v_version_populated_authors" ADD CONSTRAINT "_posts_v_version_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "personal-website"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."_posts_v" ADD CONSTRAINT "_posts_v_parent_id_posts_id_fk" FOREIGN KEY ("parent_id") REFERENCES "personal-website"."posts"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."_posts_v" ADD CONSTRAINT "_posts_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "personal-website"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."_posts_v_locales" ADD CONSTRAINT "_posts_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "personal-website"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "personal-website"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "personal-website"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "personal-website"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "personal-website"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."categories_locales" ADD CONSTRAINT "categories_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "personal-website"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."contact_socials" ADD CONSTRAINT "contact_socials_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "personal-website"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."contact_socials" ADD CONSTRAINT "contact_socials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "personal-website"."contact"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."contact_locales" ADD CONSTRAINT "contact_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "personal-website"."contact"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."payload_jobs_log" ADD CONSTRAINT "payload_jobs_log_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "personal-website"."payload_jobs"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "personal-website"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "personal-website"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "personal-website"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "personal-website"."media"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_project_fk" FOREIGN KEY ("project_id") REFERENCES "personal-website"."project"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_experience_fk" FOREIGN KEY ("experience_id") REFERENCES "personal-website"."experience"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "personal-website"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "personal-website"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_contact_fk" FOREIGN KEY ("contact_id") REFERENCES "personal-website"."contact"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_payload_jobs_fk" FOREIGN KEY ("payload_jobs_id") REFERENCES "personal-website"."payload_jobs"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "personal-website"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "personal-website"."payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "personal-website"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_blocks_introduction_order_idx" ON "personal-website"."pages_blocks_introduction" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_introduction_parent_id_idx" ON "personal-website"."pages_blocks_introduction" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_introduction_path_idx" ON "personal-website"."pages_blocks_introduction" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_introduction_picture_idx" ON "personal-website"."pages_blocks_introduction_locales" USING btree ("picture_id","_locale");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_blocks_introduction_locales_locale_parent_id_unique" ON "personal-website"."pages_blocks_introduction_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_professional_timeline_timeline_entry_order_idx" ON "personal-website"."pages_blocks_professional_timeline_timeline_entry" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_professional_timeline_timeline_entry_parent_id_idx" ON "personal-website"."pages_blocks_professional_timeline_timeline_entry" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_blocks_professional_timeline_timeline_entry_locales_locale_parent_id_unique" ON "personal-website"."pages_blocks_professional_timeline_timeline_entry_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_professional_timeline_order_idx" ON "personal-website"."pages_blocks_professional_timeline" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_professional_timeline_parent_id_idx" ON "personal-website"."pages_blocks_professional_timeline" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_professional_timeline_path_idx" ON "personal-website"."pages_blocks_professional_timeline" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_professional_timeline_media_idx" ON "personal-website"."pages_blocks_professional_timeline" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_projects_showcase_projects_order_idx" ON "personal-website"."pages_blocks_projects_showcase_projects" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_projects_showcase_projects_parent_id_idx" ON "personal-website"."pages_blocks_projects_showcase_projects" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_projects_showcase_projects_project_idx" ON "personal-website"."pages_blocks_projects_showcase_projects" USING btree ("project_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_projects_showcase_order_idx" ON "personal-website"."pages_blocks_projects_showcase" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_projects_showcase_parent_id_idx" ON "personal-website"."pages_blocks_projects_showcase" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_projects_showcase_path_idx" ON "personal-website"."pages_blocks_projects_showcase" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_blocks_projects_showcase_locales_locale_parent_id_unique" ON "personal-website"."pages_blocks_projects_showcase_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_choose_your_path_paths_order_idx" ON "personal-website"."pages_blocks_choose_your_path_paths" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_choose_your_path_paths_parent_id_idx" ON "personal-website"."pages_blocks_choose_your_path_paths" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_blocks_choose_your_path_paths_locales_locale_parent_id_unique" ON "personal-website"."pages_blocks_choose_your_path_paths_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_choose_your_path_order_idx" ON "personal-website"."pages_blocks_choose_your_path" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_choose_your_path_parent_id_idx" ON "personal-website"."pages_blocks_choose_your_path" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_choose_your_path_path_idx" ON "personal-website"."pages_blocks_choose_your_path" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_blocks_choose_your_path_locales_locale_parent_id_unique" ON "personal-website"."pages_blocks_choose_your_path_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_experience_experiences_order_idx" ON "personal-website"."pages_blocks_experience_experiences" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_experience_experiences_parent_id_idx" ON "personal-website"."pages_blocks_experience_experiences" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_experience_experiences_experience_idx" ON "personal-website"."pages_blocks_experience_experiences" USING btree ("experience_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_experience_order_idx" ON "personal-website"."pages_blocks_experience" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_experience_parent_id_idx" ON "personal-website"."pages_blocks_experience" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_experience_path_idx" ON "personal-website"."pages_blocks_experience" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_blocks_experience_locales_locale_parent_id_unique" ON "personal-website"."pages_blocks_experience_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_contact_order_idx" ON "personal-website"."pages_blocks_contact" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_contact_parent_id_idx" ON "personal-website"."pages_blocks_contact" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_contact_path_idx" ON "personal-website"."pages_blocks_contact" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_contact_contact_idx" ON "personal-website"."pages_blocks_contact" USING btree ("contact_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_blocks_contact_locales_locale_parent_id_unique" ON "personal-website"."pages_blocks_contact_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_hero_hero_media_idx" ON "personal-website"."pages" USING btree ("hero_media_id");
  CREATE INDEX IF NOT EXISTS "pages_slug_idx" ON "personal-website"."pages" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "pages_updated_at_idx" ON "personal-website"."pages" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "pages_created_at_idx" ON "personal-website"."pages" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_locales_locale_parent_id_unique" ON "personal-website"."pages_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "users_updated_at_idx" ON "personal-website"."users" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "users_created_at_idx" ON "personal-website"."users" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "users_email_idx" ON "personal-website"."users" USING btree ("email");
  CREATE INDEX IF NOT EXISTS "media_updated_at_idx" ON "personal-website"."media" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "media_created_at_idx" ON "personal-website"."media" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "media_filename_idx" ON "personal-website"."media" USING btree ("filename");
  CREATE INDEX IF NOT EXISTS "project_technologies_order_idx" ON "personal-website"."project_technologies" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "project_technologies_parent_id_idx" ON "personal-website"."project_technologies" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "project_media_idx" ON "personal-website"."project" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "project_updated_at_idx" ON "personal-website"."project" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "project_created_at_idx" ON "personal-website"."project" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "project_locales_locale_parent_id_unique" ON "personal-website"."project_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "experience_technologies_order_idx" ON "personal-website"."experience_technologies" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "experience_technologies_parent_id_idx" ON "personal-website"."experience_technologies" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "experience_logo_idx" ON "personal-website"."experience" USING btree ("logo_id");
  CREATE INDEX IF NOT EXISTS "experience_updated_at_idx" ON "personal-website"."experience" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "experience_created_at_idx" ON "personal-website"."experience" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "experience_locales_locale_parent_id_unique" ON "personal-website"."experience_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "posts_populated_authors_order_idx" ON "personal-website"."posts_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "posts_populated_authors_parent_id_idx" ON "personal-website"."posts_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "posts_hero_image_idx" ON "personal-website"."posts" USING btree ("hero_image_id");
  CREATE INDEX IF NOT EXISTS "posts_updated_at_idx" ON "personal-website"."posts" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "posts_created_at_idx" ON "personal-website"."posts" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "posts__status_idx" ON "personal-website"."posts" USING btree ("_status");
  CREATE UNIQUE INDEX IF NOT EXISTS "posts_locales_locale_parent_id_unique" ON "personal-website"."posts_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "posts_rels_order_idx" ON "personal-website"."posts_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "posts_rels_parent_idx" ON "personal-website"."posts_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "posts_rels_path_idx" ON "personal-website"."posts_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "posts_rels_posts_id_idx" ON "personal-website"."posts_rels" USING btree ("posts_id");
  CREATE INDEX IF NOT EXISTS "posts_rels_categories_id_idx" ON "personal-website"."posts_rels" USING btree ("categories_id");
  CREATE INDEX IF NOT EXISTS "posts_rels_users_id_idx" ON "personal-website"."posts_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_populated_authors_order_idx" ON "personal-website"."_posts_v_version_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_populated_authors_parent_id_idx" ON "personal-website"."_posts_v_version_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_parent_idx" ON "personal-website"."_posts_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_version_hero_image_idx" ON "personal-website"."_posts_v" USING btree ("version_hero_image_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_version_updated_at_idx" ON "personal-website"."_posts_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_version_created_at_idx" ON "personal-website"."_posts_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_version__status_idx" ON "personal-website"."_posts_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_posts_v_created_at_idx" ON "personal-website"."_posts_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_posts_v_updated_at_idx" ON "personal-website"."_posts_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_posts_v_snapshot_idx" ON "personal-website"."_posts_v" USING btree ("snapshot");
  CREATE INDEX IF NOT EXISTS "_posts_v_published_locale_idx" ON "personal-website"."_posts_v" USING btree ("published_locale");
  CREATE INDEX IF NOT EXISTS "_posts_v_latest_idx" ON "personal-website"."_posts_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_posts_v_autosave_idx" ON "personal-website"."_posts_v" USING btree ("autosave");
  CREATE UNIQUE INDEX IF NOT EXISTS "_posts_v_locales_locale_parent_id_unique" ON "personal-website"."_posts_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_rels_order_idx" ON "personal-website"."_posts_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_posts_v_rels_parent_idx" ON "personal-website"."_posts_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_rels_path_idx" ON "personal-website"."_posts_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_posts_v_rels_posts_id_idx" ON "personal-website"."_posts_v_rels" USING btree ("posts_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_rels_categories_id_idx" ON "personal-website"."_posts_v_rels" USING btree ("categories_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_rels_users_id_idx" ON "personal-website"."_posts_v_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "categories_updated_at_idx" ON "personal-website"."categories" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "categories_created_at_idx" ON "personal-website"."categories" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "categories_locales_locale_parent_id_unique" ON "personal-website"."categories_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "contact_socials_order_idx" ON "personal-website"."contact_socials" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "contact_socials_parent_id_idx" ON "personal-website"."contact_socials" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "contact_socials_logo_idx" ON "personal-website"."contact_socials" USING btree ("logo_id");
  CREATE INDEX IF NOT EXISTS "contact_updated_at_idx" ON "personal-website"."contact" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "contact_created_at_idx" ON "personal-website"."contact" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "contact_locales_locale_parent_id_unique" ON "personal-website"."contact_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "payload_jobs_log_order_idx" ON "personal-website"."payload_jobs_log" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "payload_jobs_log_parent_id_idx" ON "personal-website"."payload_jobs_log" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "payload_jobs_completed_at_idx" ON "personal-website"."payload_jobs" USING btree ("completed_at");
  CREATE INDEX IF NOT EXISTS "payload_jobs_total_tried_idx" ON "personal-website"."payload_jobs" USING btree ("total_tried");
  CREATE INDEX IF NOT EXISTS "payload_jobs_has_error_idx" ON "personal-website"."payload_jobs" USING btree ("has_error");
  CREATE INDEX IF NOT EXISTS "payload_jobs_task_slug_idx" ON "personal-website"."payload_jobs" USING btree ("task_slug");
  CREATE INDEX IF NOT EXISTS "payload_jobs_queue_idx" ON "personal-website"."payload_jobs" USING btree ("queue");
  CREATE INDEX IF NOT EXISTS "payload_jobs_wait_until_idx" ON "personal-website"."payload_jobs" USING btree ("wait_until");
  CREATE INDEX IF NOT EXISTS "payload_jobs_processing_idx" ON "personal-website"."payload_jobs" USING btree ("processing");
  CREATE INDEX IF NOT EXISTS "payload_jobs_updated_at_idx" ON "personal-website"."payload_jobs" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_jobs_created_at_idx" ON "personal-website"."payload_jobs" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_global_slug_idx" ON "personal-website"."payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_updated_at_idx" ON "personal-website"."payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_created_at_idx" ON "personal-website"."payload_locked_documents" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_order_idx" ON "personal-website"."payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_parent_idx" ON "personal-website"."payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_path_idx" ON "personal-website"."payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_pages_id_idx" ON "personal-website"."payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_users_id_idx" ON "personal-website"."payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_media_id_idx" ON "personal-website"."payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_project_id_idx" ON "personal-website"."payload_locked_documents_rels" USING btree ("project_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_experience_id_idx" ON "personal-website"."payload_locked_documents_rels" USING btree ("experience_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_posts_id_idx" ON "personal-website"."payload_locked_documents_rels" USING btree ("posts_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_categories_id_idx" ON "personal-website"."payload_locked_documents_rels" USING btree ("categories_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_contact_id_idx" ON "personal-website"."payload_locked_documents_rels" USING btree ("contact_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_payload_jobs_id_idx" ON "personal-website"."payload_locked_documents_rels" USING btree ("payload_jobs_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_key_idx" ON "personal-website"."payload_preferences" USING btree ("key");
  CREATE INDEX IF NOT EXISTS "payload_preferences_updated_at_idx" ON "personal-website"."payload_preferences" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_created_at_idx" ON "personal-website"."payload_preferences" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_order_idx" ON "personal-website"."payload_preferences_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_parent_idx" ON "personal-website"."payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_path_idx" ON "personal-website"."payload_preferences_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_users_id_idx" ON "personal-website"."payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "payload_migrations_updated_at_idx" ON "personal-website"."payload_migrations" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_migrations_created_at_idx" ON "personal-website"."payload_migrations" USING btree ("created_at");`)
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
