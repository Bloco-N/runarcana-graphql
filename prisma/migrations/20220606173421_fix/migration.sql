/*
  Warnings:

  - You are about to drop the `Linage` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Character" DROP CONSTRAINT "Character_linageId_fkey";

-- DropForeignKey
ALTER TABLE "Linage" DROP CONSTRAINT "Linage_originId_fkey";

-- DropForeignKey
ALTER TABLE "SpellLineage" DROP CONSTRAINT "SpellLineage_linageId_fkey";

-- DropTable
DROP TABLE "Linage";

-- CreateTable
CREATE TABLE "Lineage" (
    "id" SERIAL NOT NULL,
    "originId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Lineage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_linageId_fkey" FOREIGN KEY ("linageId") REFERENCES "Lineage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lineage" ADD CONSTRAINT "Lineage_originId_fkey" FOREIGN KEY ("originId") REFERENCES "Origin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpellLineage" ADD CONSTRAINT "SpellLineage_linageId_fkey" FOREIGN KEY ("linageId") REFERENCES "Lineage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
