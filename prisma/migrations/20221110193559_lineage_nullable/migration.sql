-- DropForeignKey
ALTER TABLE "Character" DROP CONSTRAINT "Character_lineageId_fkey";

-- AlterTable
ALTER TABLE "Character" ALTER COLUMN "lineageId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_lineageId_fkey" FOREIGN KEY ("lineageId") REFERENCES "Lineage"("id") ON DELETE SET NULL ON UPDATE CASCADE;
