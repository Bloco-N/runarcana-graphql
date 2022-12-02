import components from '../../dataSource/components.json'

export default components.map((component) => ({
  name: component.name,
  symbol: component.symbol
}))
