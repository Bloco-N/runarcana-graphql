-- CreateTable
CREATE TABLE "VelSutra" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "prerequisites" TEXT NOT NULL,
    "cost" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "VelSutra_pkey" PRIMARY KEY ("id")
);
