/*
  Warnings:

  - You are about to drop the column `originId` on the `Spell` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Spell" DROP CONSTRAINT "Spell_originId_fkey";

-- AlterTable
ALTER TABLE "Spell" DROP COLUMN "originId";
