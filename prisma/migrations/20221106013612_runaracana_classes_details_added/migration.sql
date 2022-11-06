/*
  Warnings:

  - Added the required column `description` to the `RunarcanaClass` table without a default value. This is not possible if the table is not empty.
  - Added the required column `primaryAbility` to the `RunarcanaClass` table without a default value. This is not possible if the table is not empty.
  - Added the required column `proficiencies` to the `RunarcanaClass` table without a default value. This is not possible if the table is not empty.
  - Added the required column `savingThrows` to the `RunarcanaClass` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RunarcanaClass" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "primaryAbility" TEXT NOT NULL,
ADD COLUMN     "proficiencies" TEXT NOT NULL,
ADD COLUMN     "savingThrows" TEXT NOT NULL;
