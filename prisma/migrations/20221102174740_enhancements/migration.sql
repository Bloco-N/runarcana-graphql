-- CreateTable
CREATE TABLE "Enhancement" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "prerequisites" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Enhancement_pkey" PRIMARY KEY ("id")
);
