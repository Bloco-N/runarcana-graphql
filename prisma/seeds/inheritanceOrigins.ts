import inheritances from '../../dataSource/inheritances.json'
import origins from '../../dataSource/origins.json'

const originsNames = origins.map((origin) => origin.name)

const inheritanceOrigins = []
inheritances.forEach((inheritance, inheritanceIndex) => {

  inheritance.origins.forEach((origin) => {

    if (originsNames.includes(origin)) {

      inheritanceOrigins.push({
        inheritanceId: inheritanceIndex + 1,
        originId: originsNames.indexOf(origin) + 1,
        createdAt: new Date(),
        updatedAt: new Date()
      })
    
    }
  
  })

})

export default inheritanceOrigins
