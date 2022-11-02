import professions from '../../dataSource/professions.json'

export default professions.map(profession => {
  return {
    name: profession.name,
    description: JSON.stringify(profession.info),
    tasks: JSON.stringify(profession.tasks),
    sinergies: JSON.stringify(profession.sinergies),
    tools: JSON.stringify(profession.tools),
    table: JSON.stringify(profession.table)
  }
})
