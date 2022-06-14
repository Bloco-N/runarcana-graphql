/*
  Warnings:

  - The primary key for the `SpellLineage` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `linageId` on the `SpellLineage` table. All the data in the column will be lost.
  - Added the required column `lineageId` to the `SpellLineage` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "SpellLineage" DROP CONSTRAINT "SpellLineage_linageId_fkey";

-- AlterTable
ALTER TABLE "SpellLineage" DROP CONSTRAINT "SpellLineage_pkey",
DROP COLUMN "linageId",
ADD COLUMN     "lineageId" INTEGER NOT NULL,
ADD CONSTRAINT "SpellLineage_pkey" PRIMARY KEY ("spellId", "lineageId");

-- AddForeignKey
ALTER TABLE "SpellLineage" ADD CONSTRAINT "SpellLineage_lineageId_fkey" FOREIGN KEY ("lineageId") REFERENCES "Lineage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
