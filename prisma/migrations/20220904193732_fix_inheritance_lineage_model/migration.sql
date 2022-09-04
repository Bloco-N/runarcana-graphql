/*
  Warnings:

  - The primary key for the `InheritanceLineage` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `regionId` on the `InheritanceLineage` table. All the data in the column will be lost.
  - Added the required column `lineageId` to the `InheritanceLineage` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "InheritanceLineage" DROP CONSTRAINT "InheritanceLineage_regionId_fkey";

-- AlterTable
ALTER TABLE "InheritanceLineage" DROP CONSTRAINT "InheritanceLineage_pkey",
DROP COLUMN "regionId",
ADD COLUMN     "lineageId" INTEGER NOT NULL,
ADD CONSTRAINT "InheritanceLineage_pkey" PRIMARY KEY ("inheritanceId", "lineageId");

-- AddForeignKey
ALTER TABLE "InheritanceLineage" ADD CONSTRAINT "InheritanceLineage_lineageId_fkey" FOREIGN KEY ("lineageId") REFERENCES "Lineage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
