import { Character } from '../src/schemas/Character/Character'
import { Characteristic } from '../src/schemas/Character/CharacterComplements/Characteristic'
import { CharacterRunarcanaClass } from '../src/schemas/Character/CharacterRelations/CharacterRunarcanaClass'

function characterAddComplements (character) : Character {
  const builtCharacter : Character = character as Character

  builtCharacter.Characteristics = currentCharacteristics(builtCharacter.CharacterRunarcanaClasses)

  return builtCharacter
}

function firstClassLevel (data) {
  const classProgress = JSON.parse(data.progress)
  const characterProgressUpdated = []

  characterProgressUpdated.push(...classProgress[0].c.new?.map((characteristicName: string) => ({
    name: characteristicName,
    lvl: 1
  })) || [])

  data.characterProgress = JSON.stringify(characterProgressUpdated)

  return {
    classHpBase: data.hitDie,
    CharacterRunarcanaClasses: {
      create: {
        runarcanaClassId: data.id,
        progress: data.characterProgress
      }

    }
  }
}

function levelUp (data) {
  const classProgress = JSON.parse(data.classProgress)
  const characterProgressUpdated = JSON.parse(data.characterProgress)

  data.classHpBase += data.hitDieRoll
  data.characterLevel++
  data.characterClassLevel++

  const lvlUpdate = classProgress.find((item: { lvl: number }) => item.lvl === data.characterLevel)

  if (lvlUpdate) {
    characterProgressUpdated.push(...lvlUpdate.c.new?.map((characteristicName: string) => ({
      name: characteristicName,
      lvl: 1
    })) || [])

    data.characterProgress = JSON.stringify(characterProgressUpdated)
  }

  return {
    Character: {
      update: {
        level: data.characterLevel,
        classHpBase: data.classHpBase
      },
      level: data.characterClassLevel,
      progress: data.characterProgress
    }
  }
}

function characteristicOnLvl (characteristicName: string, _characteristicLvl: number, classCharacteristics: Characteristic[]) {
  const characteristic = classCharacteristics.find((characteristic: { name: string }) => characteristic.name === characteristicName)
  return {
    name: characteristic.name,
    info: characteristic.info
  }
}

function currentClassCharacteristics (charClass: CharacterRunarcanaClass) : Characteristic[] {
  const classCharacteristics = JSON.parse(charClass.RunarcanaClass.characteristics)
  const CharProgress = JSON.parse(charClass.progress)
  return CharProgress.map((characteristic: { name: string; lvl: number }) => characteristicOnLvl(characteristic.name, characteristic.lvl, classCharacteristics))
}

function currentCharacteristics (characterClasses: CharacterRunarcanaClass[]) : Characteristic[] {
  const currentCharacteristic: Characteristic[] = []
  characterClasses.forEach((runarcanaClass: CharacterRunarcanaClass) => {
    currentCharacteristic.push(...currentClassCharacteristics(runarcanaClass))
  })

  return currentCharacteristic
}

function createRelation (createData) {
  return {
    CharacterInheritances: {
      create: {
        inheritanceId: createData.InheritanceId
      }
    },
    CharacterRunarcanaClasses: {
      create: {
        runarcanaClassId: createData.RunarcanaClassId
      }
    },
    CharacterSpells: {
      create: {
        spellId: createData.SpellId
      }
    }
  }
}

export {
  levelUp,
  characterAddComplements,
  firstClassLevel,
  createRelation
}
