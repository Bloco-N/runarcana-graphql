import spells from '../../dataSource/spells.json'
import mysteries from '../../dataSource/mysteries.json'

const mysteriesNames = mysteries.map(mystery => mystery.name)

const spellMysteries = []
spells.forEach((spell, spellIndex) => {
  spell.mysteries.forEach(mystery => {
    spellMysteries.push({
      spellId: spellIndex + 1,
      mysteryId: mysteriesNames.indexOf(mystery) + 1,
      createdAt: new Date(),
      updatedAt: new Date()
    })
  })
})

export default spellMysteries
