/*
  Warnings:

  - Added the required column `aditionalBaseSpeed` to the `Lineage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `baseSpeed` to the `Origin` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Lineage" ADD COLUMN     "aditionalBaseSpeed" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Origin" ADD COLUMN     "baseSpeed" INTEGER NOT NULL;
