-- DropForeignKey
ALTER TABLE "CharacterElement" DROP CONSTRAINT "CharacterElement_characterId_fkey";

-- DropForeignKey
ALTER TABLE "CharacterElement" DROP CONSTRAINT "CharacterElement_elementId_fkey";

-- DropForeignKey
ALTER TABLE "CharacterMistery" DROP CONSTRAINT "CharacterMistery_characterId_fkey";

-- DropForeignKey
ALTER TABLE "CharacterMistery" DROP CONSTRAINT "CharacterMistery_mysteryId_fkey";

-- DropForeignKey
ALTER TABLE "CharacterRunarcanaClass" DROP CONSTRAINT "CharacterRunarcanaClass_characterId_fkey";

-- DropForeignKey
ALTER TABLE "CharacterRunarcanaClass" DROP CONSTRAINT "CharacterRunarcanaClass_runarcanaClassId_fkey";

-- DropForeignKey
ALTER TABLE "ElementIngredient" DROP CONSTRAINT "ElementIngredient_elementId_fkey";

-- DropForeignKey
ALTER TABLE "ElementIngredient" DROP CONSTRAINT "ElementIngredient_elementRecipeId_fkey";

-- DropForeignKey
ALTER TABLE "ElementRecipe" DROP CONSTRAINT "ElementRecipe_elementId_fkey";

-- DropForeignKey
ALTER TABLE "SpellCharacter" DROP CONSTRAINT "SpellCharacter_characterId_fkey";

-- DropForeignKey
ALTER TABLE "SpellCharacter" DROP CONSTRAINT "SpellCharacter_spellId_fkey";

-- DropForeignKey
ALTER TABLE "SpellClass" DROP CONSTRAINT "SpellClass_classId_fkey";

-- DropForeignKey
ALTER TABLE "SpellClass" DROP CONSTRAINT "SpellClass_spellId_fkey";

-- DropForeignKey
ALTER TABLE "SpellComponent" DROP CONSTRAINT "SpellComponent_componentId_fkey";

-- DropForeignKey
ALTER TABLE "SpellComponent" DROP CONSTRAINT "SpellComponent_spellId_fkey";

-- DropForeignKey
ALTER TABLE "SpellLineage" DROP CONSTRAINT "SpellLineage_lineageId_fkey";

-- DropForeignKey
ALTER TABLE "SpellLineage" DROP CONSTRAINT "SpellLineage_spellId_fkey";

-- DropForeignKey
ALTER TABLE "SpellMystery" DROP CONSTRAINT "SpellMystery_mysteryId_fkey";

-- DropForeignKey
ALTER TABLE "SpellMystery" DROP CONSTRAINT "SpellMystery_spellId_fkey";

-- DropForeignKey
ALTER TABLE "SpellOrigin" DROP CONSTRAINT "SpellOrigin_originId_fkey";

-- DropForeignKey
ALTER TABLE "SpellOrigin" DROP CONSTRAINT "SpellOrigin_spellId_fkey";

-- AddForeignKey
ALTER TABLE "SpellCharacter" ADD CONSTRAINT "SpellCharacter_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpellCharacter" ADD CONSTRAINT "SpellCharacter_spellId_fkey" FOREIGN KEY ("spellId") REFERENCES "Spell"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpellComponent" ADD CONSTRAINT "SpellComponent_spellId_fkey" FOREIGN KEY ("spellId") REFERENCES "Spell"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpellComponent" ADD CONSTRAINT "SpellComponent_componentId_fkey" FOREIGN KEY ("componentId") REFERENCES "Component"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpellLineage" ADD CONSTRAINT "SpellLineage_lineageId_fkey" FOREIGN KEY ("lineageId") REFERENCES "Lineage"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpellLineage" ADD CONSTRAINT "SpellLineage_spellId_fkey" FOREIGN KEY ("spellId") REFERENCES "Spell"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpellClass" ADD CONSTRAINT "SpellClass_classId_fkey" FOREIGN KEY ("classId") REFERENCES "RunarcanaClass"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpellClass" ADD CONSTRAINT "SpellClass_spellId_fkey" FOREIGN KEY ("spellId") REFERENCES "Spell"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpellMystery" ADD CONSTRAINT "SpellMystery_spellId_fkey" FOREIGN KEY ("spellId") REFERENCES "Spell"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpellMystery" ADD CONSTRAINT "SpellMystery_mysteryId_fkey" FOREIGN KEY ("mysteryId") REFERENCES "Mystery"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterMistery" ADD CONSTRAINT "CharacterMistery_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterMistery" ADD CONSTRAINT "CharacterMistery_mysteryId_fkey" FOREIGN KEY ("mysteryId") REFERENCES "Mystery"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpellOrigin" ADD CONSTRAINT "SpellOrigin_originId_fkey" FOREIGN KEY ("originId") REFERENCES "Origin"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpellOrigin" ADD CONSTRAINT "SpellOrigin_spellId_fkey" FOREIGN KEY ("spellId") REFERENCES "Spell"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ElementRecipe" ADD CONSTRAINT "ElementRecipe_elementId_fkey" FOREIGN KEY ("elementId") REFERENCES "Element"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ElementIngredient" ADD CONSTRAINT "ElementIngredient_elementId_fkey" FOREIGN KEY ("elementId") REFERENCES "Element"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ElementIngredient" ADD CONSTRAINT "ElementIngredient_elementRecipeId_fkey" FOREIGN KEY ("elementRecipeId") REFERENCES "ElementRecipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterElement" ADD CONSTRAINT "CharacterElement_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterElement" ADD CONSTRAINT "CharacterElement_elementId_fkey" FOREIGN KEY ("elementId") REFERENCES "Element"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterRunarcanaClass" ADD CONSTRAINT "CharacterRunarcanaClass_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterRunarcanaClass" ADD CONSTRAINT "CharacterRunarcanaClass_runarcanaClassId_fkey" FOREIGN KEY ("runarcanaClassId") REFERENCES "RunarcanaClass"("id") ON DELETE CASCADE ON UPDATE CASCADE;
