import { Character, CreateOneCharacterArgs, RunarcanaClass } from '../prisma/generated/type-graphql'
import CharacterInputData                                    from '../src/inputs/Character/CharacterInputData'
import { levelUp }                                           from './characterFuncitons'
import { Prisma }                                            from '@prisma/client'

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

function firstCharacterCreateArgs(userId: number, charData: CharacterInputData, firstClass: RunarcanaClass): CreateOneCharacterArgs {

  const progress = JSON.stringify(JSON.parse(firstClass.progress)[0].c.new.map((characteristicName: string) => ({
    name: characteristicName,
    lvl: 1
  })))

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

function lvlUpfindCharacterArgs(id: number, runarcanaClassId: number): Prisma.CharacterFindUniqueOrThrowArgs {

  return {
    where: {
      id
    },
    select: {
      id: true,
      level: true,
      classHpBase: true,
      CharacterRunarcanaClasses: {
        where: {
          runarcanaClassId
        },
        select: {
          level: true,
          progress: true,
          RunarcanaClass: true
        }
      }
    }
  }

}

function lvlUpUpdateCharacterArgs(character: Character, roll: number): Prisma.CharacterUpdateArgs {

  const { UC, UCRC } = levelUp(character, roll)

  return {
    where: {
      id: character.id
    },
    data: {
      level: UC.level,
      classHpBase: UC.classHpBase,
      CharacterRunarcanaClasses: {
        update: {
          where: {
            runarcanaClassId_characterId: {
              characterId: character.id,
              runarcanaClassId: UCRC.RunarcanaClass.id
            }
          },
          data: {
            level: UCRC.level,
            progress: UCRC.progress
          }
        }
      }
    }
  }

}

export { firsClassArgs, firstCharacterCreateArgs, findBaseSpeedArgs, findCharacteristicsArgs, lvlUpfindCharacterArgs, lvlUpUpdateCharacterArgs }
