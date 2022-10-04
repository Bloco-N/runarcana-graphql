import runarcanaClasses from '../../dataSource/runarcanaClasses.json'

export default runarcanaClasses.map(runarcanaClass => {
  return {
    name: runarcanaClass.name,
    progressTable: runarcanaClass.progressTable,
    healthPoints: runarcanaClass.healthPoints,
    proficiences: runarcanaClass.proficiences,
    equipment: runarcanaClass.equipment,
    classCaracteristics: runarcanaClass.classCaracteristics,
    especialCaracteristics: runarcanaClass.classCaracteristics
  }
})
