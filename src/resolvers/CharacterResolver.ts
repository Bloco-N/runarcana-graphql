import { Arg, Authorized, Ctx, Mutation, Resolver } from 'type-graphql'
import { CharacterInputData } from '../inputs/CharacterInputData'
import { IContext } from '../interfaces/IContext'
import { ApiResponse } from '../schemas/ApiResponse'
import { Character } from '../schemas/Character'
import CharacterService from '../services/CharacterService'

@Resolver(Character)
export class CharacterResolver {
  characterService = new CharacterService()

  @Mutation(() => ApiResponse)
  @Authorized()
  async create (@Arg('data') data:CharacterInputData, @Ctx() ctx:IContext):Promise<ApiResponse> {
    this.characterService.create(ctx, data)
    return new ApiResponse('✅ character created')
  }
}
