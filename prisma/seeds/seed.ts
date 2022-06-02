import { PrismaClient } from '@prisma/client'
import classes from './classes'

const prisma = new PrismaClient()

async function main () {
  for (const rclass of classes) {
    await prisma.class.create({
      data: rclass
    })
  }
}

main().catch(e => {
  console.log(`❌ An error ocurred: ${e}`)
  process.exit(1)
}).finally(() => {
  prisma.$disconnect()
})
