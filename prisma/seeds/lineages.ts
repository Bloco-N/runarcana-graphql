import origins from '../../dataSource/origins.json'
import lineagesInfos from '../../dataSource/lineages.json'

const lineagesNames = lineagesInfos.map((lineage) => lineage.name)

const lineages = []

origins.forEach((origin, originIndex) => {
  origin.lineages.forEach((lineage) => {
    const lineageIndex = lineagesNames.indexOf(lineage)
    const lineageInfo = lineagesInfos[lineageIndex]

    lineages.push({
      name: lineage,
      characteristics: lineageInfo.característica,
      abilities: lineageInfo.habilidades,
      aditionalBaseSpeed: lineageInfo.aditionalBaseSpeed,
      originId: originIndex + 1,
      createdAt: new Date(),
      updatedAt: new Date()
    })
  })
})

export default lineages
