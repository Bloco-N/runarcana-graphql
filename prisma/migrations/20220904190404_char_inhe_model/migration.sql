-- CreateTable
CREATE TABLE "CharacterInheritance" (
    "characterId" INTEGER NOT NULL,
    "inheritanceId" INTEGER NOT NULL,

    CONSTRAINT "CharacterInheritance_pkey" PRIMARY KEY ("characterId","inheritanceId")
);

-- AddForeignKey
ALTER TABLE "CharacterInheritance" ADD CONSTRAINT "CharacterInheritance_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterInheritance" ADD CONSTRAINT "CharacterInheritance_inheritanceId_fkey" FOREIGN KEY ("inheritanceId") REFERENCES "Inheritance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
