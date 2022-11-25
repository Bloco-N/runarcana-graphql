import { Character as PrismaCharacter } from '@prisma/client'
import AdditionalInfos from '../src/schemas/CharacterComplements/AdditionalInfos'
import { Character } from '../src/schemas/Character'
import { Characteristic } from '../src/schemas/CharacterComplements/Characteristic'
import LevelUpData from '../src/schemas/LevelUpData'
import { CharacterRunarcanaClass } from '../src/schemas/relations/CharacterRunarcanaClass'

const characterAdditionalInfosDefault: AdditionalInfos = {
  classHpBase: 0
}

function characterAddComplements (character: PrismaCharacter) : Character {
  const builtCharacter : Character = {
    ...character,
    Characteristics: null,
    AdditionalInfos: JSON.parse(character.additionalInfos)
  }

  builtCharacter.Characteristics = currentCharacteristics(builtCharacter.CharacterRunarcanaClass)

  return builtCharacter
}

function levelUp (data: LevelUpData) : LevelUpData {
  const classProgress = JSON.parse(data.classProgress)
  const characterProgressUpdated = JSON.parse(data.characterProgress)
  const characterAdditionalInfosUpdated:AdditionalInfos = JSON.parse(data.characterAdditionalInfos)

  characterAdditionalInfosUpdated.classHpBase += data.hitDieRoll

  data.characterLevel += 1
  data.characterClassLevel += 1

  const lvlUpdate = classProgress.find((item: { lvl: number }) => item.lvl === data.characterLevel)

  if (lvlUpdate) {
    characterProgressUpdated.push(...lvlUpdate.c.new?.map((characteristicName: string) => ({
      name: characteristicName,
      lvl: 1
    })) || [])

    data.characterProgress = JSON.stringify(characterProgressUpdated)
  }

  data.characterAdditionalInfos = JSON.stringify(characterAdditionalInfosUpdated)

  return data
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

function firstClassLevel (data: LevelUpData) : LevelUpData {
  const classProgress = JSON.parse(data.classProgress)
  const characterProgressUpdated = []
  const characterAdditionalInfosUpdated:AdditionalInfos = characterAdditionalInfosDefault

  characterAdditionalInfosUpdated.classHpBase = data.hitDieRoll

  characterProgressUpdated.push(...classProgress[0].c.new?.map((characteristicName: string) => ({
    name: characteristicName,
    lvl: 1
  })) || [])

  data.characterProgress = JSON.stringify(characterProgressUpdated)
  data.characterAdditionalInfos = JSON.stringify(characterAdditionalInfosUpdated)

  return data
}

export {
  levelUp,
  characterAddComplements,
  firstClassLevel,
  characterAdditionalInfosDefault
}
