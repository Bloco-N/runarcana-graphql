import velSutras from '../../dataSource/velSutras.json'

export default velSutras.map(velSutra => {
  return {
    name: velSutra.name,
    prerequisites: velSutra.prerequisites,
    cost: velSutra.cost,
    description: JSON.stringify(velSutra.info)
  }
})
