/*
  Warnings:

  - Added the required column `abilities` to the `Lineage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `characteristics` to the `Lineage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `abilities` to the `Origin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `characteristics` to the `Origin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inheritances` to the `Origin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `languages` to the `Origin` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Lineage" ADD COLUMN     "abilities" TEXT NOT NULL,
ADD COLUMN     "characteristics" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Origin" ADD COLUMN     "abilities" TEXT NOT NULL,
ADD COLUMN     "characteristics" TEXT NOT NULL,
ADD COLUMN     "inheritances" INTEGER NOT NULL,
ADD COLUMN     "languages" TEXT NOT NULL;
