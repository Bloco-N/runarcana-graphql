-- CreateTable
CREATE TABLE "Inheritance" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "prerequisites" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "atributes" TEXT NOT NULL,
    "benefits" TEXT NOT NULL,
    "rechosen" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Inheritance_pkey" PRIMARY KEY ("id")
);
