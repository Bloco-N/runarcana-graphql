import { Character, CharacterRunarcanaClass } from '../prisma/generated/type-graphql'
import { Characteristic }                     from '../src/schemas/Character/CharacterComplements/Characteristic'

function levelUp(character: Character, roll: number): { UC: Character; UCRC: CharacterRunarcanaClass } {

  const characterRunarcanaClass = character.CharacterRunarcanaClasses[0]
  const runarcanaClass = characterRunarcanaClass.RunarcanaClass

  const classProgress = JSON.parse(runarcanaClass.progress)
  const characterRunarcanaClassProgress = JSON.parse(characterRunarcanaClass.progress)

  character.classHpBase += roll
  character.level++
  characterRunarcanaClass.level++

  const progressUpdate = classProgress.find((item: { lvl: number }) => item.lvl === characterRunarcanaClass.level)

  if (progressUpdate) {

    characterRunarcanaClassProgress.push(...(progressUpdate.c.new?.map((characteristicName: string) => ({
      name: characteristicName,
      lvl: 1
    })) || []))

    characterRunarcanaClass.progress = JSON.stringify(characterRunarcanaClassProgress)
  
  }

  return { UC: character, UCRC: characterRunarcanaClass }

}

function characteristicOnLvl(characteristicName: string, _characteristicLvl: number, classCharacteristics: Characteristic[]) {

  const characteristic = classCharacteristics.find((characteristic: { name: string }) => characteristic.name === characteristicName)
  return {
    name: characteristic.name,
    info: characteristic.info
  }

}

function currentClassCharacteristics(charClass: CharacterRunarcanaClass): Characteristic[] {

  const classCharacteristics = JSON.parse(charClass.RunarcanaClass.characteristics)
  const CharProgress = JSON.parse(charClass.progress)
  return CharProgress.map((characteristic: { name: string; lvl: number }) =>
    characteristicOnLvl(characteristic.name, characteristic.lvl, classCharacteristics))

}

function currentCharacteristics(characterClasses: CharacterRunarcanaClass[]): Characteristic[] {

  const currentCharacteristic: Characteristic[] = []
  characterClasses.forEach((runarcanaClass: CharacterRunarcanaClass) => {

    currentCharacteristic.push(...currentClassCharacteristics(runarcanaClass))
  
  })

  return currentCharacteristic

}

export { levelUp, currentCharacteristics }
