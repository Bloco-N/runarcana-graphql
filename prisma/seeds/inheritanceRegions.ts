import inheritances from '../../dataSource/inheritances.json'
import regions      from '../../dataSource/regions.json'

const inheritanceRegions = []
inheritances.forEach((inheritance, inheritanceIndex) => {

  inheritance.regions.forEach((region) => {

    if (regions.includes(region)) {

      inheritanceRegions.push({
        inheritanceId: inheritanceIndex + 1,
        regionId: regions.indexOf(region) + 1,
        createdAt: new Date(),
        updatedAt: new Date()
      })
    
    }
  
  })

})

export default inheritanceRegions
