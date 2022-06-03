import { Element as PrismaElement, ElementIngredient, ElementRecipe } from '@generated/type-graphql'
import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class Element extends PrismaElement {
  @Field(() => [Element])
    ElementIngredients?: ElementIngredient[]

  @Field(() => [Element])
    ElementRecipes?: ElementRecipe[]
}
