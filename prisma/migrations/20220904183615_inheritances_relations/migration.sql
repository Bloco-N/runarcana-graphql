-- CreateTable
CREATE TABLE "InheritanceOrigin" (
    "inheritanceId" INTEGER NOT NULL,
    "originId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InheritanceOrigin_pkey" PRIMARY KEY ("inheritanceId","originId")
);

-- CreateTable
CREATE TABLE "InheritanceRegion" (
    "inheritanceId" INTEGER NOT NULL,
    "regionId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InheritanceRegion_pkey" PRIMARY KEY ("inheritanceId","regionId")
);

-- CreateTable
CREATE TABLE "InheritanceLineage" (
    "inheritanceId" INTEGER NOT NULL,
    "regionId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InheritanceLineage_pkey" PRIMARY KEY ("inheritanceId","regionId")
);

-- AddForeignKey
ALTER TABLE "InheritanceOrigin" ADD CONSTRAINT "InheritanceOrigin_originId_fkey" FOREIGN KEY ("originId") REFERENCES "Origin"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InheritanceOrigin" ADD CONSTRAINT "InheritanceOrigin_inheritanceId_fkey" FOREIGN KEY ("inheritanceId") REFERENCES "Inheritance"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InheritanceRegion" ADD CONSTRAINT "InheritanceRegion_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InheritanceRegion" ADD CONSTRAINT "InheritanceRegion_inheritanceId_fkey" FOREIGN KEY ("inheritanceId") REFERENCES "Inheritance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InheritanceLineage" ADD CONSTRAINT "InheritanceLineage_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InheritanceLineage" ADD CONSTRAINT "InheritanceLineage_inheritanceId_fkey" FOREIGN KEY ("inheritanceId") REFERENCES "Inheritance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
