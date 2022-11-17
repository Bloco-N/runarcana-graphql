import { Characteristic } from '../src/schemas/Characteristic'
import { CharacterRunarcanaClassWithDetails, CharacterWithCharacteristics, CharacterWithDetails } from './types'

function levelUP (charClass: CharacterRunarcanaClassWithDetails) : CharacterRunarcanaClassWithDetails {
  const classProgress = JSON.parse(charClass.RunarcanaClass.progress)
  const newCharProgress = JSON.parse(charClass.progress)

  charClass.level += 1

  const lvlUpdate = classProgress.find((item: { lvl: number }) => item.lvl === charClass.level)

  if (lvlUpdate) {
    newCharProgress.push(...lvlUpdate.c.new?.map((characteristicName: string) => ({
      name: characteristicName,
      lvl: 1
    })) || [])

    charClass.progress = JSON.stringify(newCharProgress)
  }

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

function charAddCharacteristics (character: CharacterWithDetails) : CharacterWithCharacteristics {
  const characterWithCharacteristics: CharacterWithCharacteristics = {
    ...character,
    Characteristics: []
  }
  character.CharacterRunarcanaClass.forEach((runarcanaClass: CharacterRunarcanaClassWithDetails) => {
    characterWithCharacteristics.Characteristics.push(...currentClassCharacteristics(runarcanaClass))
  })
  return characterWithCharacteristics
}

export {
  levelUP,
  charAddCharacteristics
}
