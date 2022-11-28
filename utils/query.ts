import { Prisma } from '@prisma/client'
import { CreateOneCharacterArgs, RunarcanaClass } from '../prisma/generated/type-graphql'
import CharacterInputData from '../src/inputs/Character/CharacterInputData'
import { firstClassLevel } from './characterFuncitons'

function firsClassArgs (id : number) : Prisma.RunarcanaClassFindUniqueArgsBase {
  return {
    where: {
      id
    },
    select: {
      id: true,
      progress: true,
      hitDie: true
    }
  }
}

function firstCharacterCreateArgs (userId : number, charData:CharacterInputData, firstClass: RunarcanaClass) : CreateOneCharacterArgs {
  const updatedFirstClass = firstClassLevel(firstClass)

  const connect = (id) => ({ connect: { id } })

  if (charData.lineageId) {
    return {
      data: {
        name: charData.name,
        essence: charData.essence,
        expression: charData.expression,
        exaltation: charData.exaltation,
        User: connect(userId),
        Region: connect(charData.regionId),
        Past: connect(charData.pastId),
        Origin: connect(charData.originId),
        Lineage: connect(charData.lineageId),
        classHpBase: updatedFirstClass.hitDie,
        CharacterRunarcanaClasses: {
          create: [
            {
              RunarcanaClass: connect(updatedFirstClass.id),
              progress: updatedFirstClass.progress
            }
          ]
        }
      }
    }
  }
  return {
    data: {
      name: charData.name,
      essence: charData.essence,
      expression: charData.expression,
      exaltation: charData.exaltation,
      User: connect(userId),
      Region: connect(charData.regionId),
      Past: connect(charData.pastId),
      Origin: connect(charData.originId),
      classHpBase: updatedFirstClass.hitDie,
      CharacterRunarcanaClasses: {
        create: [
          {
            RunarcanaClass: connect(updatedFirstClass.id),
            progress: updatedFirstClass.progress
          }
        ]
      }
    }
  }
}

export {
  firsClassArgs,
  firstCharacterCreateArgs
}
