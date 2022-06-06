import { PrismaClient } from '@prisma/client'
import runarcanaClasses from './runarcanaClass'
import regions from './regions'
import components from './components'
import durations from './durations'
import origins from './origins'
import elements from './elements'
import magicalSources from './magicalSources'
import mysteries from './mysteries'
import pasts from './pasts'
import ranges from './ranges'
import conjurations from './conjurations'
import spells from './spells'

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
}

main().catch(e => {
  console.log(`❌ An error ocurred: ${e}`)
  process.exit(1)
}).finally(() => {
  prisma.$disconnect()
})
