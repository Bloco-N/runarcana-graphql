-- CreateTable
CREATE TABLE "CharacterMistery" (
    "characterId" INTEGER NOT NULL,
    "mysteryId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CharacterMistery_pkey" PRIMARY KEY ("characterId","mysteryId")
);

-- AddForeignKey
ALTER TABLE "CharacterMistery" ADD CONSTRAINT "CharacterMistery_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterMistery" ADD CONSTRAINT "CharacterMistery_mysteryId_fkey" FOREIGN KEY ("mysteryId") REFERENCES "Mystery"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
