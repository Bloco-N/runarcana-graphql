/*
  Warnings:

  - The values [NOT_PROEFFICIENT,PROFFICIENT] on the enum `proficiency` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "proficiency_new" AS ENUM ('NOT_PROFICIENT', 'PROFICIENT', 'SPECIALIST');
ALTER TABLE "Character" ALTER COLUMN "acrobatics" DROP DEFAULT;
ALTER TABLE "Character" ALTER COLUMN "animalHandling" DROP DEFAULT;
ALTER TABLE "Character" ALTER COLUMN "arcana" DROP DEFAULT;
ALTER TABLE "Character" ALTER COLUMN "athletics" DROP DEFAULT;
ALTER TABLE "Character" ALTER COLUMN "charismaSavingThrow" DROP DEFAULT;
ALTER TABLE "Character" ALTER COLUMN "constitutionSavingThrow" DROP DEFAULT;
ALTER TABLE "Character" ALTER COLUMN "deception" DROP DEFAULT;
ALTER TABLE "Character" ALTER COLUMN "dexteritySavingThrow" DROP DEFAULT;
ALTER TABLE "Character" ALTER COLUMN "history" DROP DEFAULT;
ALTER TABLE "Character" ALTER COLUMN "insight" DROP DEFAULT;
ALTER TABLE "Character" ALTER COLUMN "intelligenceSavingThrow" DROP DEFAULT;
ALTER TABLE "Character" ALTER COLUMN "intimidation" DROP DEFAULT;
ALTER TABLE "Character" ALTER COLUMN "investigation" DROP DEFAULT;
ALTER TABLE "Character" ALTER COLUMN "medicine" DROP DEFAULT;
ALTER TABLE "Character" ALTER COLUMN "nature" DROP DEFAULT;
ALTER TABLE "Character" ALTER COLUMN "perception" DROP DEFAULT;
ALTER TABLE "Character" ALTER COLUMN "performance" DROP DEFAULT;
ALTER TABLE "Character" ALTER COLUMN "persuasion" DROP DEFAULT;
ALTER TABLE "Character" ALTER COLUMN "religion" DROP DEFAULT;
ALTER TABLE "Character" ALTER COLUMN "sleightOfHand" DROP DEFAULT;
ALTER TABLE "Character" ALTER COLUMN "stealth" DROP DEFAULT;
ALTER TABLE "Character" ALTER COLUMN "strengthSavingThrow" DROP DEFAULT;
ALTER TABLE "Character" ALTER COLUMN "survival" DROP DEFAULT;
ALTER TABLE "Character" ALTER COLUMN "tecnology" DROP DEFAULT;
ALTER TABLE "Character" ALTER COLUMN "wisdomSavingThrow" DROP DEFAULT;
ALTER TABLE "Character" ALTER COLUMN "acrobatics" TYPE "proficiency_new" USING ("acrobatics"::text::"proficiency_new");
ALTER TABLE "Character" ALTER COLUMN "arcana" TYPE "proficiency_new" USING ("arcana"::text::"proficiency_new");
ALTER TABLE "Character" ALTER COLUMN "athletics" TYPE "proficiency_new" USING ("athletics"::text::"proficiency_new");
ALTER TABLE "Character" ALTER COLUMN "performance" TYPE "proficiency_new" USING ("performance"::text::"proficiency_new");
ALTER TABLE "Character" ALTER COLUMN "deception" TYPE "proficiency_new" USING ("deception"::text::"proficiency_new");
ALTER TABLE "Character" ALTER COLUMN "stealth" TYPE "proficiency_new" USING ("stealth"::text::"proficiency_new");
ALTER TABLE "Character" ALTER COLUMN "history" TYPE "proficiency_new" USING ("history"::text::"proficiency_new");
ALTER TABLE "Character" ALTER COLUMN "intimidation" TYPE "proficiency_new" USING ("intimidation"::text::"proficiency_new");
ALTER TABLE "Character" ALTER COLUMN "insight" TYPE "proficiency_new" USING ("insight"::text::"proficiency_new");
ALTER TABLE "Character" ALTER COLUMN "investigation" TYPE "proficiency_new" USING ("investigation"::text::"proficiency_new");
ALTER TABLE "Character" ALTER COLUMN "animalHandling" TYPE "proficiency_new" USING ("animalHandling"::text::"proficiency_new");
ALTER TABLE "Character" ALTER COLUMN "medicine" TYPE "proficiency_new" USING ("medicine"::text::"proficiency_new");
ALTER TABLE "Character" ALTER COLUMN "nature" TYPE "proficiency_new" USING ("nature"::text::"proficiency_new");
ALTER TABLE "Character" ALTER COLUMN "perception" TYPE "proficiency_new" USING ("perception"::text::"proficiency_new");
ALTER TABLE "Character" ALTER COLUMN "persuasion" TYPE "proficiency_new" USING ("persuasion"::text::"proficiency_new");
ALTER TABLE "Character" ALTER COLUMN "sleightOfHand" TYPE "proficiency_new" USING ("sleightOfHand"::text::"proficiency_new");
ALTER TABLE "Character" ALTER COLUMN "religion" TYPE "proficiency_new" USING ("religion"::text::"proficiency_new");
ALTER TABLE "Character" ALTER COLUMN "survival" TYPE "proficiency_new" USING ("survival"::text::"proficiency_new");
ALTER TABLE "Character" ALTER COLUMN "tecnology" TYPE "proficiency_new" USING ("tecnology"::text::"proficiency_new");
ALTER TABLE "Character" ALTER COLUMN "strengthSavingThrow" TYPE "proficiency_new" USING ("strengthSavingThrow"::text::"proficiency_new");
ALTER TABLE "Character" ALTER COLUMN "dexteritySavingThrow" TYPE "proficiency_new" USING ("dexteritySavingThrow"::text::"proficiency_new");
ALTER TABLE "Character" ALTER COLUMN "constitutionSavingThrow" TYPE "proficiency_new" USING ("constitutionSavingThrow"::text::"proficiency_new");
ALTER TABLE "Character" ALTER COLUMN "intelligenceSavingThrow" TYPE "proficiency_new" USING ("intelligenceSavingThrow"::text::"proficiency_new");
ALTER TABLE "Character" ALTER COLUMN "wisdomSavingThrow" TYPE "proficiency_new" USING ("wisdomSavingThrow"::text::"proficiency_new");
ALTER TABLE "Character" ALTER COLUMN "charismaSavingThrow" TYPE "proficiency_new" USING ("charismaSavingThrow"::text::"proficiency_new");
ALTER TYPE "proficiency" RENAME TO "proficiency_old";
ALTER TYPE "proficiency_new" RENAME TO "proficiency";
DROP TYPE "proficiency_old";
ALTER TABLE "Character" ALTER COLUMN "acrobatics" SET DEFAULT 'NOT_PROFICIENT';
ALTER TABLE "Character" ALTER COLUMN "animalHandling" SET DEFAULT 'NOT_PROFICIENT';
ALTER TABLE "Character" ALTER COLUMN "arcana" SET DEFAULT 'NOT_PROFICIENT';
ALTER TABLE "Character" ALTER COLUMN "athletics" SET DEFAULT 'NOT_PROFICIENT';
ALTER TABLE "Character" ALTER COLUMN "charismaSavingThrow" SET DEFAULT 'NOT_PROFICIENT';
ALTER TABLE "Character" ALTER COLUMN "constitutionSavingThrow" SET DEFAULT 'NOT_PROFICIENT';
ALTER TABLE "Character" ALTER COLUMN "deception" SET DEFAULT 'NOT_PROFICIENT';
ALTER TABLE "Character" ALTER COLUMN "dexteritySavingThrow" SET DEFAULT 'NOT_PROFICIENT';
ALTER TABLE "Character" ALTER COLUMN "history" SET DEFAULT 'NOT_PROFICIENT';
ALTER TABLE "Character" ALTER COLUMN "insight" SET DEFAULT 'NOT_PROFICIENT';
ALTER TABLE "Character" ALTER COLUMN "intelligenceSavingThrow" SET DEFAULT 'NOT_PROFICIENT';
ALTER TABLE "Character" ALTER COLUMN "intimidation" SET DEFAULT 'NOT_PROFICIENT';
ALTER TABLE "Character" ALTER COLUMN "investigation" SET DEFAULT 'NOT_PROFICIENT';
ALTER TABLE "Character" ALTER COLUMN "medicine" SET DEFAULT 'NOT_PROFICIENT';
ALTER TABLE "Character" ALTER COLUMN "nature" SET DEFAULT 'NOT_PROFICIENT';
ALTER TABLE "Character" ALTER COLUMN "perception" SET DEFAULT 'NOT_PROFICIENT';
ALTER TABLE "Character" ALTER COLUMN "performance" SET DEFAULT 'NOT_PROFICIENT';
ALTER TABLE "Character" ALTER COLUMN "persuasion" SET DEFAULT 'NOT_PROFICIENT';
ALTER TABLE "Character" ALTER COLUMN "religion" SET DEFAULT 'NOT_PROFICIENT';
ALTER TABLE "Character" ALTER COLUMN "sleightOfHand" SET DEFAULT 'NOT_PROFICIENT';
ALTER TABLE "Character" ALTER COLUMN "stealth" SET DEFAULT 'NOT_PROFICIENT';
ALTER TABLE "Character" ALTER COLUMN "strengthSavingThrow" SET DEFAULT 'NOT_PROFICIENT';
ALTER TABLE "Character" ALTER COLUMN "survival" SET DEFAULT 'NOT_PROFICIENT';
ALTER TABLE "Character" ALTER COLUMN "tecnology" SET DEFAULT 'NOT_PROFICIENT';
ALTER TABLE "Character" ALTER COLUMN "wisdomSavingThrow" SET DEFAULT 'NOT_PROFICIENT';
COMMIT;

-- AlterTable
ALTER TABLE "Character" ADD COLUMN     "proficiencyBonus" INTEGER NOT NULL DEFAULT 2,
ALTER COLUMN "acrobatics" SET DEFAULT E'NOT_PROFICIENT',
ALTER COLUMN "animalHandling" SET DEFAULT E'NOT_PROFICIENT',
ALTER COLUMN "arcana" SET DEFAULT E'NOT_PROFICIENT',
ALTER COLUMN "athletics" SET DEFAULT E'NOT_PROFICIENT',
ALTER COLUMN "charismaSavingThrow" SET DEFAULT E'NOT_PROFICIENT',
ALTER COLUMN "constitutionSavingThrow" SET DEFAULT E'NOT_PROFICIENT',
ALTER COLUMN "deception" SET DEFAULT E'NOT_PROFICIENT',
ALTER COLUMN "dexteritySavingThrow" SET DEFAULT E'NOT_PROFICIENT',
ALTER COLUMN "history" SET DEFAULT E'NOT_PROFICIENT',
ALTER COLUMN "insight" SET DEFAULT E'NOT_PROFICIENT',
ALTER COLUMN "intelligenceSavingThrow" SET DEFAULT E'NOT_PROFICIENT',
ALTER COLUMN "intimidation" SET DEFAULT E'NOT_PROFICIENT',
ALTER COLUMN "investigation" SET DEFAULT E'NOT_PROFICIENT',
ALTER COLUMN "medicine" SET DEFAULT E'NOT_PROFICIENT',
ALTER COLUMN "nature" SET DEFAULT E'NOT_PROFICIENT',
ALTER COLUMN "perception" SET DEFAULT E'NOT_PROFICIENT',
ALTER COLUMN "performance" SET DEFAULT E'NOT_PROFICIENT',
ALTER COLUMN "persuasion" SET DEFAULT E'NOT_PROFICIENT',
ALTER COLUMN "religion" SET DEFAULT E'NOT_PROFICIENT',
ALTER COLUMN "sleightOfHand" SET DEFAULT E'NOT_PROFICIENT',
ALTER COLUMN "stealth" SET DEFAULT E'NOT_PROFICIENT',
ALTER COLUMN "strengthSavingThrow" SET DEFAULT E'NOT_PROFICIENT',
ALTER COLUMN "survival" SET DEFAULT E'NOT_PROFICIENT',
ALTER COLUMN "tecnology" SET DEFAULT E'NOT_PROFICIENT',
ALTER COLUMN "wisdomSavingThrow" SET DEFAULT E'NOT_PROFICIENT';
