/*
  Warnings:

  - Added the required column `additionalInfos` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `level` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hitDie` to the `RunarcanaClass` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Character" ADD COLUMN     "additionalInfos" TEXT NOT NULL,
ADD COLUMN     "level" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "RunarcanaClass" ADD COLUMN     "hitDie" INTEGER NOT NULL;
