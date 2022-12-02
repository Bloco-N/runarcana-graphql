import magicalSources from '../../dataSource/magicalSources.json'

export default magicalSources.map((magicalSource) => {

  return {
    name: magicalSource.name,
    description: magicalSource.description
  }

})
