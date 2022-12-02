import magicalSources from '../../dataSource/magicalSources.json'
import mysteries from '../../dataSource/mysteries.json'

const msNames = magicalSources.map((magicalSource) => magicalSource.name)

export default mysteries.map((mystery) => {

  return {
    magicalSourceId: msNames.indexOf(mystery.source) + 1,
    name: mystery.name,
    description: mystery.description
  }

})
