-- CreateTable
CREATE TABLE "Profession" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "tasks" TEXT NOT NULL,
    "sinergies" TEXT NOT NULL,
    "tools" TEXT NOT NULL,
    "table" TEXT NOT NULL,

    CONSTRAINT "Profession_pkey" PRIMARY KEY ("id")
);
