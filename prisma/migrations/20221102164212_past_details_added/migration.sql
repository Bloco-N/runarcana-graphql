/*
  Warnings:

  - Added the required column `atributes` to the `Past` table without a default value. This is not possible if the table is not empty.
  - Added the required column `characteristic` to the `Past` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Past` table without a default value. This is not possible if the table is not empty.
  - Added the required column `equipments` to the `Past` table without a default value. This is not possible if the table is not empty.
  - Added the required column `languages` to the `Past` table without a default value. This is not possible if the table is not empty.
  - Added the required column `professions` to the `Past` table without a default value. This is not possible if the table is not empty.
  - Added the required column `skills` to the `Past` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Past" ADD COLUMN     "atributes" TEXT NOT NULL,
ADD COLUMN     "characteristic" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "equipments" TEXT NOT NULL,
ADD COLUMN     "languages" TEXT NOT NULL,
ADD COLUMN     "professions" TEXT NOT NULL,
ADD COLUMN     "skills" TEXT NOT NULL;
