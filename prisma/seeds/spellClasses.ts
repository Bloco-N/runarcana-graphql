import spells from '../../dataSource/spells.json'
import runarcanaClasses from '../../dataSource/runarcanaClasses.json'

const spellClasses = []
spells.forEach((spell, spellIndex) => {
  spell.classes.forEach((runarcanaClass) => {
    spellClasses.push({
      spellId: spellIndex + 1,
      classId: runarcanaClasses.indexOf(runarcanaClass) + 1,
      createdAt: new Date(),
      updatedAt: new Date()
    })
  })
})

export default spellClasses
