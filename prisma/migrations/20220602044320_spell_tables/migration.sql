-- CreateTable
CREATE TABLE "Class" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Class_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Spell" (
    "id" SERIAL NOT NULL,
    "conjurationId" INTEGER NOT NULL,
    "durationId" INTEGER NOT NULL,
    "originId" INTEGER NOT NULL,
    "rangeId" INTEGER NOT NULL,
    "level" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "materials" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Spell_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Conjuration" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Conjuration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Duration" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Duration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Range" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Range_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Component" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "symbol" CHAR(1) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Component_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MagicSource" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MagicSource_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mystery" (
    "id" SERIAL NOT NULL,
    "magicSourceId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Mystery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SpellCharacter" (
    "spellId" INTEGER NOT NULL,
    "characterId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SpellCharacter_pkey" PRIMARY KEY ("spellId","characterId")
);

-- CreateTable
CREATE TABLE "SpellComponent" (
    "spellId" INTEGER NOT NULL,
    "componentId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SpellComponent_pkey" PRIMARY KEY ("spellId","componentId")
);

-- CreateTable
CREATE TABLE "SpellLineage" (
    "spellId" INTEGER NOT NULL,
    "linageId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SpellLineage_pkey" PRIMARY KEY ("spellId","linageId")
);

-- CreateTable
CREATE TABLE "SpellClass" (
    "spellId" INTEGER NOT NULL,
    "classId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SpellClass_pkey" PRIMARY KEY ("spellId","classId")
);

-- CreateTable
CREATE TABLE "SpellMystery" (
    "spellId" INTEGER NOT NULL,
    "mysteryId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SpellMystery_pkey" PRIMARY KEY ("spellId","mysteryId")
);

-- CreateTable
CREATE TABLE "SpellOrigin" (
    "spellId" INTEGER NOT NULL,
    "originId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SpellOrigin_pkey" PRIMARY KEY ("spellId","originId")
);

-- CreateTable
CREATE TABLE "Element" (
    "id" SERIAL NOT NULL,
    "mysteryId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Element_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ElementRecipe" (
    "id" SERIAL NOT NULL,
    "elementId" INTEGER NOT NULL,

    CONSTRAINT "ElementRecipe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ElementIngredient" (
    "elementId" INTEGER NOT NULL,
    "elementRecipeId" INTEGER NOT NULL,

    CONSTRAINT "ElementIngredient_pkey" PRIMARY KEY ("elementId","elementRecipeId")
);

-- CreateTable
CREATE TABLE "CharacterElement" (
    "elementId" INTEGER NOT NULL,
    "characterId" INTEGER NOT NULL,

    CONSTRAINT "CharacterElement_pkey" PRIMARY KEY ("elementId","characterId")
);

-- AddForeignKey
ALTER TABLE "Spell" ADD CONSTRAINT "Spell_originId_fkey" FOREIGN KEY ("originId") REFERENCES "Origin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Spell" ADD CONSTRAINT "Spell_conjurationId_fkey" FOREIGN KEY ("conjurationId") REFERENCES "Conjuration"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Spell" ADD CONSTRAINT "Spell_durationId_fkey" FOREIGN KEY ("durationId") REFERENCES "Duration"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Spell" ADD CONSTRAINT "Spell_rangeId_fkey" FOREIGN KEY ("rangeId") REFERENCES "Range"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mystery" ADD CONSTRAINT "Mystery_magicSourceId_fkey" FOREIGN KEY ("magicSourceId") REFERENCES "MagicSource"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpellCharacter" ADD CONSTRAINT "SpellCharacter_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpellCharacter" ADD CONSTRAINT "SpellCharacter_spellId_fkey" FOREIGN KEY ("spellId") REFERENCES "Spell"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpellComponent" ADD CONSTRAINT "SpellComponent_spellId_fkey" FOREIGN KEY ("spellId") REFERENCES "Spell"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpellComponent" ADD CONSTRAINT "SpellComponent_componentId_fkey" FOREIGN KEY ("componentId") REFERENCES "Component"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpellLineage" ADD CONSTRAINT "SpellLineage_linageId_fkey" FOREIGN KEY ("linageId") REFERENCES "Linage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpellLineage" ADD CONSTRAINT "SpellLineage_spellId_fkey" FOREIGN KEY ("spellId") REFERENCES "Spell"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpellClass" ADD CONSTRAINT "SpellClass_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpellClass" ADD CONSTRAINT "SpellClass_spellId_fkey" FOREIGN KEY ("spellId") REFERENCES "Spell"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpellMystery" ADD CONSTRAINT "SpellMystery_spellId_fkey" FOREIGN KEY ("spellId") REFERENCES "Spell"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpellMystery" ADD CONSTRAINT "SpellMystery_mysteryId_fkey" FOREIGN KEY ("mysteryId") REFERENCES "Mystery"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpellOrigin" ADD CONSTRAINT "SpellOrigin_originId_fkey" FOREIGN KEY ("originId") REFERENCES "Origin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpellOrigin" ADD CONSTRAINT "SpellOrigin_spellId_fkey" FOREIGN KEY ("spellId") REFERENCES "Spell"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Element" ADD CONSTRAINT "Element_mysteryId_fkey" FOREIGN KEY ("mysteryId") REFERENCES "Mystery"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ElementRecipe" ADD CONSTRAINT "ElementRecipe_elementId_fkey" FOREIGN KEY ("elementId") REFERENCES "Element"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ElementIngredient" ADD CONSTRAINT "ElementIngredient_elementId_fkey" FOREIGN KEY ("elementId") REFERENCES "Element"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ElementIngredient" ADD CONSTRAINT "ElementIngredient_elementRecipeId_fkey" FOREIGN KEY ("elementRecipeId") REFERENCES "ElementRecipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterElement" ADD CONSTRAINT "CharacterElement_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterElement" ADD CONSTRAINT "CharacterElement_elementId_fkey" FOREIGN KEY ("elementId") REFERENCES "Element"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
