import inheritances from '../../dataSource/inheritances.json'
import origins from '../../dataSource/origins.json'

const lineages = []
origins.forEach((origin) => origin.lineages.forEach((lineage) => lineages.push(lineage)))

const inheritanceLineages = []
inheritances.forEach((inheritance, inheritanceIndex) => {
  inheritance.lineages.forEach((lineage) => {
    if (lineages.includes(lineage)) {
      inheritanceLineages.push({
        inheritanceId: inheritanceIndex + 1,
        lineageId: lineages.indexOf(lineage) + 1,
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }
  })
})

export default inheritanceLineages
