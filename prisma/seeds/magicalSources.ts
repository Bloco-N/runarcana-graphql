import magicalSources from '../../dataSource/magicalSources.json'

export default magicalSources.map((magicalSource) => ({
  name: magicalSource.name,
  description: magicalSource.description
}))
