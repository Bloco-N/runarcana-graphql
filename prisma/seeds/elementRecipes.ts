import elements from '../../dataSource/elements.json'

const elementsName = elements.map((item) => item.name)
const elementRecipes = []

elements.forEach((element) => {

  element.recipes.forEach(() => {

    elementRecipes.push({
      elementId: elementsName.indexOf(element.name) + 1,
      createdAt: new Date(),
      updatedAt: new Date()
    })
  
  })

})

export default elementRecipes
