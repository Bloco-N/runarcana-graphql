import runarcanaClasses from '../../dataSource/runarcanaClasses.json'

export default runarcanaClasses.map(runarcanaClass => {
  return {
    name: runarcanaClass.name,
    description: runarcanaClass.description,
    primaryAbility: runarcanaClass.primatyAbility,
    savingThrows: runarcanaClass.saves,
    proficiencies: JSON.stringify(runarcanaClass.proficiencies),
    progress: runarcanaClass.classProgress,
    characteristics: runarcanaClass.characteristics
  }
})
