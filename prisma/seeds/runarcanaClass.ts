import runarcanaClasses from '../../dataSource/runarcanaClasses.json'

export default runarcanaClasses.map(runarcanaClass => {
  return {
    name: runarcanaClass.name,
    progress: runarcanaClass.progress
  }
})
