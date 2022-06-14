/*
  Warnings:

  - You are about to drop the column `linageId` on the `Character` table. All the data in the column will be lost.
  - Added the required column `lineageId` to the `Character` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Character" DROP CONSTRAINT "Character_linageId_fkey";

-- AlterTable
ALTER TABLE "Character" DROP COLUMN "linageId",
ADD COLUMN     "lineageId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_lineageId_fkey" FOREIGN KEY ("lineageId") REFERENCES "Lineage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
