import components from '../../dataSource/components.json'

export default components.map((component) => {

  return {
    name: component.name,
    symbol: component.symbol
  }

})
