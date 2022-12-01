import { CharacterRunarcanaClass, Prisma } from '@prisma/client'
import { CreateOneCharacterArgs, RunarcanaClass } from '../prisma/generated/type-graphql'
import CharacterInputData from '../src/inputs/Character/CharacterInputData'
import CharacterLevelUpInputData from '../src/inputs/Character/CharacterLevelUpInputData'
import { levelUp } from './characterFuncitons'

function firsClassArgs(id: number): Prisma.RunarcanaClassFindUniqueOrThrowArgs {
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

function firstCharacterCreateArgs(
  userId: number,
  charData: CharacterInputData,
  firstClass: RunarcanaClass
): CreateOneCharacterArgs {
  const progress = JSON.stringify(
    JSON.parse(firstClass.progress)[0].c.new.map((characteristicName: string) => ({
      name: characteristicName,
      lvl: 1
    }))
  )

  const connect = (id) => ({ connect: { id } })

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
      Lineage: charData.lineageId ? connect(charData.lineageId) : undefined,
      classHpBase: firstClass.hitDie,
      CharacterRunarcanaClasses: {
        create: [
          {
            RunarcanaClass: connect(firstClass.id),
            progress
          }
        ]
      }
    }
  }
}

function findBaseSpeedArgs(id: number): Prisma.CharacterFindUniqueOrThrowArgs {
  return {
    where: {
      id
    },
    select: {
      Origin: {
        select: {
          baseSpeed: true
        }
      },
      Lineage: {
        select: {
          aditionalBaseSpeed: true
        }
      }
    }
  }
}

function findCharacteristicsArgs(id: number): Prisma.CharacterFindUniqueOrThrowArgs {
  return {
    where: {
      id
    },
    include: {
      CharacterRunarcanaClasses: {
        include: {
          RunarcanaClass: true
        }
      }
    }
  }
}

function findLvlUpCharClassArgs(data: CharacterLevelUpInputData): Prisma.CharacterRunarcanaClassFindUniqueOrThrowArgs {
  return {
    where: {
      runarcanaClassId_characterId: {
        characterId: data.characterId,
        runarcanaClassId: data.runarcanaClassId
      }
    },
    select: {
      progress: true,
      level: true,
      RunarcanaClass: {
        select: {
          progress: true
        }
      },
      Character: {
        select: {
          level: true,
          classHpBase: true
        }
      }
    }
  }
}

function updateLvlUpCharClassArgs(
  data: CharacterLevelUpInputData,
  charClass: CharacterRunarcanaClass
): Prisma.CharacterRunarcanaClassUpdateArgs {
  return {
    where: {
      runarcanaClassId_characterId: {
        characterId: data.characterId,
        runarcanaClassId: data.runarcanaClassId
      }
    },
    data: levelUp(charClass, data.hitDie)
  }
}

export {
  firsClassArgs,
  firstCharacterCreateArgs,
  findBaseSpeedArgs,
  findCharacteristicsArgs,
  findLvlUpCharClassArgs,
  updateLvlUpCharClassArgs
}
