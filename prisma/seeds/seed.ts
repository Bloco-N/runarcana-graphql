import { PrismaClient } from '@prisma/client'
import runarcanaClasses from './runarcanaClass'
import regions from './regions'
import components from './components'
import durations from './durations'
import origins from './origins'
import lineages from './lineages'
import elements from './elements'
import magicalSources from './magicalSources'
import mysteries from './mysteries'
import pasts from './pasts'
import ranges from './ranges'
import conjurations from './conjurations'
import spells from './spells'
import spellClasses from './spellClasses'
import spellComponents from './speelComponents'
import spellOrigins from './spellOrigins'
import spellLineages from './spellLineages'
import spellMysteries from './spellMysteries'
import elementRecipes from './elementRecipes'
import elementIngrendients from './elementIngredients'

const prisma = new PrismaClient()

async function main () {
  for (const runarcanaClass of runarcanaClasses) {
    await prisma.runarcanaClass.create({
      data: runarcanaClass
    })
  }
  for (const region of regions) {
    await prisma.region.create({
      data: region
    })
  }
  for (const component of components) {
    await prisma.component.create({
      data: component
    })
  }
  for (const duration of durations) {
    await prisma.duration.create({
      data: duration
    })
  }
  for (const origin of origins) {
    await prisma.origin.create({
      data: origin
    })
  }
  for (const lineage of lineages) {
    await prisma.lineage.create({
      data: lineage
    })
  }
  for (const magicalSource of magicalSources) {
    await prisma.magicalSource.create({
      data: magicalSource
    })
  }
  for (const mystery of mysteries) {
    await prisma.mystery.create({
      data: mystery
    })
  }
  for (const element of elements) {
    await prisma.element.create({
      data: element
    })
  }

  for (const past of pasts) {
    await prisma.past.create({
      data: past
    })
  }
  for (const range of ranges) {
    await prisma.range.create({
      data: range
    })
  }
  for (const conjuration of conjurations) {
    await prisma.conjuration.create({
      data: conjuration
    })
  }
  for (const spell of spells) {
    await prisma.spell.create({
      data: spell
    })
  }
  for (const spellClass of spellClasses) {
    await prisma.spellClass.create({
      data: spellClass
    })
  }
  for (const spellComponent of spellComponents) {
    await prisma.spellComponent.create({
      data: spellComponent
    })
  }
  for (const spellOrigin of spellOrigins) {
    await prisma.spellOrigin.create({
      data: spellOrigin
    })
  }
  for (const spellLineage of spellLineages) {
    await prisma.spellLineage.create({
      data: spellLineage
    })
  }
  for (const spellMystery of spellMysteries) {
    await prisma.spellMystery.create({
      data: spellMystery
    })
  }
  for (const elementRecipe of elementRecipes) {
    await prisma.elementRecipe.create({
      data: elementRecipe
    })
  }
  for (const elementIngredient of elementIngrendients) {
    await prisma.elementIngredient.create({
      data: elementIngredient
    })
  }
}

main().catch(e => {
  console.log(`❌ An error ocurred: ${e}`)
  process.exit(1)
}).finally(() => {
  prisma.$disconnect()
})
