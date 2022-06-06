-- DropForeignKey
ALTER TABLE "Character" DROP CONSTRAINT "Character_classId_fkey";

-- AlterTable
ALTER TABLE "Character" ADD COLUMN     "runarcanaClassId" INTEGER;

-- CreateTable
CREATE TABLE "CharacterRunarcanaClass" (
    "runarcanaClassId" INTEGER NOT NULL,
    "characterId" INTEGER NOT NULL,
    "level" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CharacterRunarcanaClass_pkey" PRIMARY KEY ("runarcanaClassId","characterId")
);

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_runarcanaClassId_fkey" FOREIGN KEY ("runarcanaClassId") REFERENCES "RunarcanaClass"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterRunarcanaClass" ADD CONSTRAINT "CharacterRunarcanaClass_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterRunarcanaClass" ADD CONSTRAINT "CharacterRunarcanaClass_runarcanaClassId_fkey" FOREIGN KEY ("runarcanaClassId") REFERENCES "RunarcanaClass"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
