import enhancements from '../../dataSource/enhancements.json'

export default enhancements.map((enhancement) => {
  return {
    name: enhancement.name,
    prerequisites: enhancement.prerequisite || '',
    description: JSON.stringify(enhancement.info)
  }
})
