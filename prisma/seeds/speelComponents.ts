import spells from '../../dataSource/spells.json'
import components from '../../dataSource/components.json'

const spellComponents = []
const componentsSymbols = components.map((components) => components.symbol)
spells.forEach((spell, spellIndex) => {
  spell.components.forEach((component) => {
    spellComponents.push({
      spellId: spellIndex + 1,
      componentId: componentsSymbols.indexOf(component) + 1,
      createdAt: new Date(),
      updatedAt: new Date()
    })
  })
})

export default spellComponents
