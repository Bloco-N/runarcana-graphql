import elements from '../../dataSource/elements.json'

const elementsName = elements.map((item) => item.name)
const recipes = []

elements.forEach((element) => {

  element.recipes.forEach((recipe) => {

    recipes.push(recipe)
  
  })

})

const elementIngrendients = []

recipes.forEach((recipe, recipeIndex) => {

  recipe.forEach((ingrendient) => {

    elementIngrendients.push({
      elementRecipeId: recipeIndex + 1,
      elementId: elementsName.indexOf(ingrendient) + 1,
      createdAt: new Date(),
      updatedAt: new Date()
    })
  
  })

})

export default elementIngrendients
