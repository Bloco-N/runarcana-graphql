/*
  Warnings:

  - You are about to drop the column `classId` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `runarcanaClassId` on the `Character` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Character" DROP CONSTRAINT "Character_runarcanaClassId_fkey";

-- AlterTable
ALTER TABLE "Character" DROP COLUMN "classId",
DROP COLUMN "runarcanaClassId";
