import mysteries from '../../dataSource/mysteries.json'
import elements from '../../dataSource/elements.json'

const mNames = mysteries.map((mysterie) => mysterie.name)

export default elements.map((element) => {

  return {
    mysteryId: mNames.indexOf(element.name) + 1,
    name: element.name,
    description: element.description
  }

})
