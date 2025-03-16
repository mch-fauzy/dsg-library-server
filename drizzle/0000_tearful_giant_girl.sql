CREATE TABLE "dsg_books" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "dsg_books_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" text NOT NULL,
	"category" text NOT NULL,
	"publisher" text NOT NULL,
	"isbn" text,
	"issn" text,
	"author" text NOT NULL,
	"year" integer NOT NULL,
	"price" double precision NOT NULL,
	"description" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone,
	CONSTRAINT "dsg_books_isbn_unique" UNIQUE("isbn"),
	CONSTRAINT "dsg_books_issn_unique" UNIQUE("issn")
);
