import elements from '../../dataSource/elements.json'
import mysteries from '../../dataSource/mysteries.json'

const mNames = mysteries.map((mysterie) => mysterie.name)

export default elements.map((element) => ({
  mysteryId: mNames.indexOf(element.name) + 1,
  name: element.name,
  description: element.description
}))
