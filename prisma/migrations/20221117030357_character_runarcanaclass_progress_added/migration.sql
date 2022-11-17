/*
  Warnings:

  - Added the required column `progress` to the `CharacterRunarcanaClass` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CharacterRunarcanaClass" ADD COLUMN     "progress" TEXT NOT NULL;
