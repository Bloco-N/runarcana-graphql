/*
  Warnings:

  - Added the required column `classCaracteristics` to the `RunarcanaClass` table without a default value. This is not possible if the table is not empty.
  - Added the required column `equipment` to the `RunarcanaClass` table without a default value. This is not possible if the table is not empty.
  - Added the required column `especialCaracteristics` to the `RunarcanaClass` table without a default value. This is not possible if the table is not empty.
  - Added the required column `healthPoints` to the `RunarcanaClass` table without a default value. This is not possible if the table is not empty.
  - Added the required column `proficiences` to the `RunarcanaClass` table without a default value. This is not possible if the table is not empty.
  - Added the required column `progressTable` to the `RunarcanaClass` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RunarcanaClass" ADD COLUMN     "classCaracteristics" TEXT NOT NULL,
ADD COLUMN     "equipment" TEXT NOT NULL,
ADD COLUMN     "especialCaracteristics" TEXT NOT NULL,
ADD COLUMN     "healthPoints" TEXT NOT NULL,
ADD COLUMN     "proficiences" TEXT NOT NULL,
ADD COLUMN     "progressTable" TEXT NOT NULL;
