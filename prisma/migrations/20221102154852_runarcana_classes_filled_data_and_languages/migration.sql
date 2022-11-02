/*
  Warnings:

  - Added the required column `characteristics` to the `RunarcanaClass` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RunarcanaClass" ADD COLUMN     "characteristics" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Languages" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Languages_pkey" PRIMARY KEY ("id")
);
