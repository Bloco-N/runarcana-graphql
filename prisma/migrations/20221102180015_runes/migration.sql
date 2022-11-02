-- CreateTable
CREATE TABLE "Rune" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "prerequisites" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Rune_pkey" PRIMARY KEY ("id")
);
