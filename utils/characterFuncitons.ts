import { CharacterRunarcanaClass, CharacterRunarcanaClassUpdateInput } from '../prisma/generated/type-graphql'
import { Characteristic } from '../src/schemas/Character/CharacterComplements/Characteristic'

function levelUp(charClass: CharacterRunarcanaClass, roll: number): CharacterRunarcanaClassUpdateInput {
  const Character = charClass.Character
  const RunarcanaClass = charClass.RunarcanaClass
  const classProgress = JSON.parse(RunarcanaClass.progress)
  const characterProgressUpdated = JSON.parse(charClass.progress)

  Character.classHpBase += roll
  Character.level++
  charClass.level++

  const lvlUpdate = classProgress.find((item: { lvl: number }) => item.lvl === charClass.level)

  if (lvlUpdate) {
    characterProgressUpdated.push(
      ...(lvlUpdate.c.new?.map((characteristicName: string) => ({
        name: characteristicName,
        lvl: 1
      })) || [])
    )

    charClass.progress = JSON.stringify(characterProgressUpdated)
  }

  return {
    Character: {
      update: {
        level: Character.level,
        classHpBase: Character.classHpBase
      }
    },
    level: charClass.level,
    progress: charClass.progress
  }
}

function characteristicOnLvl(characteristicName: string, _characteristicLvl: number, classCharacteristics: Characteristic[]) {
  const characteristic = classCharacteristics.find(
    (characteristic: { name: string }) => characteristic.name === characteristicName
  )
  return {
    name: characteristic.name,
    info: characteristic.info
  }
}

function currentClassCharacteristics(charClass: CharacterRunarcanaClass): Characteristic[] {
  const classCharacteristics = JSON.parse(charClass.RunarcanaClass.characteristics)
  const CharProgress = JSON.parse(charClass.progress)
  return CharProgress.map((characteristic: { name: string; lvl: number }) =>
    characteristicOnLvl(characteristic.name, characteristic.lvl, classCharacteristics)
  )
}

function currentCharacteristics(characterClasses: CharacterRunarcanaClass[]): Characteristic[] {
  const currentCharacteristic: Characteristic[] = []
  characterClasses.forEach((runarcanaClass: CharacterRunarcanaClass) => {
    currentCharacteristic.push(...currentClassCharacteristics(runarcanaClass))
  })

  return currentCharacteristic
}

export { levelUp, currentCharacteristics }
