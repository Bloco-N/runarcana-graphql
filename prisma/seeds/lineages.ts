import origins from '../../dataSource/origins.json'

const lineages = []
origins.forEach((origin, originIndex) => {
  origin.lineages.forEach(lineage => {
    lineages.push({
      name: lineage,
      originId: originIndex + 1,
      createdAt: new Date(),
      updatedAt: new Date()
    })
  })
})

export default lineages
