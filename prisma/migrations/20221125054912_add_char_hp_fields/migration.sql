/*
  Warnings:

  - You are about to drop the column `additionalInfos` on the `Character` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Character" DROP COLUMN "additionalInfos",
ADD COLUMN     "bonusHp" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "classHpBase" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "currentHp" INTEGER NOT NULL DEFAULT 0;
