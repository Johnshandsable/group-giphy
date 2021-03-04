CREATE DATABASE "giphy_search_favorites";

-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key

-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);

-- favorite gifs table 
CREATE TABLE "favorite_gifs" (
	"id" SERIAL PRIMARY KEY, 
	"image_url" VARCHAR(1024) NOT NULL
);

-- junction table 
CREATE TABLE "favorite_gifs_category" (
	"id" SERIAL PRIMARY KEY, 
	"favorite_gif_id" INT REFERENCES "favorite_gifs", 
	"category_id" INT REFERENCES "category" );

INSERT INTO "category" ("name")
VALUES ('funny'), ('cohort'), ('cartoon'), ('nsfw'), ('meme');
