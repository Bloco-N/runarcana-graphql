import AdditionalInfos from '../src/schemas/CharacterAddons/AdditionalInfos'
import { Characteristic } from '../src/schemas/CharacterAddons/Characteristic'
import { BuiltCharacter, CharacterLevelUp, CharClass, DataBaseCharacter } from './types'

const characterAdditionalInfosDefault: AdditionalInfos = {
  ClassHpBase: 0
}

function characterAddComplements (character: DataBaseCharacter) : BuiltCharacter {
  const builtCharacter: BuiltCharacter = {
    ...character,
    Characteristics: null,
    AdditionalInfos: JSON.parse(character.additionalInfos)
  }

  builtCharacter.Characteristics = currentCharacteristics(builtCharacter.CharacterRunarcanaClass)

  return builtCharacter
}

function levelUp (charClass: CharacterLevelUp, hitDie:number) : CharacterLevelUp {
  const classProgress = JSON.parse(charClass.RunarcanaClass.progress)
  const characterProgressUpdated = JSON.parse(charClass.progress)
  const characterAdditionalInfosUpdated:AdditionalInfos = JSON.parse(charClass.Character.additionalInfos)

  characterAdditionalInfosUpdated.ClassHpBase += hitDie

  charClass.Character.level += 1
  charClass.level += 1

  const lvlUpdate = classProgress.find((item: { lvl: number }) => item.lvl === charClass.level)

  if (lvlUpdate) {
    characterProgressUpdated.push(...lvlUpdate.c.new?.map((characteristicName: string) => ({
      name: characteristicName,
      lvl: 1
    })) || [])

    charClass.progress = JSON.stringify(characterProgressUpdated)
  }

  charClass.Character.additionalInfos = JSON.stringify(characterAdditionalInfosUpdated)

  return charClass
}

function characteristicOnLvl (characteristicName: string, _characteristicLvl: number, classCharacteristics: Characteristic[]) {
  const characteristic = classCharacteristics.find((characteristic: { name: string }) => characteristic.name === characteristicName)
  return {
    name: characteristic.name,
    info: characteristic.info
  }
}

function currentClassCharacteristics (charClass: { RunarcanaClass: { characteristics: string }; progress: string }) : Characteristic[] {
  const classCharacteristics = JSON.parse(charClass.RunarcanaClass.characteristics)
  const CharProgress = JSON.parse(charClass.progress)
  return CharProgress.map((characteristic: { name: string; lvl: number }) => characteristicOnLvl(characteristic.name, characteristic.lvl, classCharacteristics))
}

function currentCharacteristics (characterClasses: CharClass[]) : Characteristic[] {
  const currentCharacteristic: Characteristic[] = []
  characterClasses.forEach((runarcanaClass: CharClass) => {
    currentCharacteristic.push(...currentClassCharacteristics(runarcanaClass))
  })

  return currentCharacteristic
}

export {
  levelUp,
  characterAdditionalInfosDefault,
  characterAddComplements
}
