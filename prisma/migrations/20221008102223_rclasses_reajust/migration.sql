/*
  Warnings:

  - You are about to drop the column `classCaracteristics` on the `RunarcanaClass` table. All the data in the column will be lost.
  - You are about to drop the column `equipment` on the `RunarcanaClass` table. All the data in the column will be lost.
  - You are about to drop the column `especialCaracteristics` on the `RunarcanaClass` table. All the data in the column will be lost.
  - You are about to drop the column `healthPoints` on the `RunarcanaClass` table. All the data in the column will be lost.
  - You are about to drop the column `proficiences` on the `RunarcanaClass` table. All the data in the column will be lost.
  - You are about to drop the column `progressTable` on the `RunarcanaClass` table. All the data in the column will be lost.
  - Added the required column `progress` to the `RunarcanaClass` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RunarcanaClass" DROP COLUMN "classCaracteristics",
DROP COLUMN "equipment",
DROP COLUMN "especialCaracteristics",
DROP COLUMN "healthPoints",
DROP COLUMN "proficiences",
DROP COLUMN "progressTable",
ADD COLUMN     "progress" TEXT NOT NULL;
