import regions from '../../dataSource/regions.json'

export default regions.map((region) => {

  return {
    name: region
  }

})
