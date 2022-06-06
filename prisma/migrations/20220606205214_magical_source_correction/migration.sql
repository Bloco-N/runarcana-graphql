/*
  Warnings:

  - You are about to drop the column `magicSourceId` on the `Mystery` table. All the data in the column will be lost.
  - You are about to drop the `MagicSource` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `magicalSourceId` to the `Mystery` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Mystery" DROP CONSTRAINT "Mystery_magicSourceId_fkey";

-- AlterTable
ALTER TABLE "Mystery" DROP COLUMN "magicSourceId",
ADD COLUMN     "magicalSourceId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "MagicSource";

-- CreateTable
CREATE TABLE "MagicalSource" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MagicalSource_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Mystery" ADD CONSTRAINT "Mystery_magicalSourceId_fkey" FOREIGN KEY ("magicalSourceId") REFERENCES "MagicalSource"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
