import spells from '../../dataSource/spells.json'
import origins from '../../dataSource/origins.json'

const lineages = []
origins.forEach(origin => origin.lineages.forEach(lineage => lineages.push(lineage)))

const spellLineages = []
spells.forEach((spell, spellIndex) => {
  spell.origins.forEach(lineage => {
    if (lineages.includes(lineage)) {
      spellLineages.push({
        spellId: spellIndex + 1,
        lineageId: lineages.indexOf(lineage) + 1,
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }
  })
})

export default spellLineages
