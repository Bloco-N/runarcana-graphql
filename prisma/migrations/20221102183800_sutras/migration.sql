-- CreateTable
CREATE TABLE "Sutra" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "components" TEXT NOT NULL,
    "prerequisites" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Sutra_pkey" PRIMARY KEY ("id")
);
