import { Field, InputType } from 'type-graphql'
import { CharacterUpdateManyMutationInput } from '../../../prisma/generated/type-graphql'

@InputType()
export default class CharacterUpdateProficiencyInputData {
  @Field()
    id:number

  @Field()
    charData: CharacterUpdateManyMutationInput
}
