import spells from '../../dataSource/spells.json'
import origins from '../../dataSource/origins.json'

const originsNames = origins.map((origin) => origin.name)

const spellOrigins = []
spells.forEach((spell, spellIndex) => {
  spell.origins.forEach((origin) => {
    if (originsNames.includes(origin)) {
      spellOrigins.push({
        spellId: spellIndex + 1,
        originId: originsNames.indexOf(origin) + 1,
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }
  })
})

export default spellOrigins
