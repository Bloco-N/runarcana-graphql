import { Arg, Authorized, Ctx, Mutation, Resolver } from 'type-graphql'
import CharacterAddClassInputData from '../inputs/Character/CharacterAddClassInputData'
import CharacterCreateInputData from '../inputs/Character/CharacterCreateInputData'
import CharacterRunarcanaClassId from '../inputs/Character/CharacterRunarcanaClassId'
import CharacterUpdateClassInputData from '../inputs/Character/CharacterUpdateClassInputData'
import CharacterUpdateInputData from '../inputs/Character/CharacterUpdateInputData'
import { IContext } from '../interfaces/IContext'
import { ApiResponse } from '../schemas/ApiResponse'
import { Character } from '../schemas/Character'
import CharacterService from '../services/CharacterService'

@Resolver(Character)
export class CharacterResolver {
  characterService = new CharacterService()

  @Mutation(() => ApiResponse)
  @Authorized()
  async createCharacter (@Arg('data') data:CharacterCreateInputData, @Ctx() ctx:IContext):Promise<ApiResponse> {
    await this.characterService.create(ctx, data)
    return new ApiResponse('✅ character created')
  }

  @Mutation(() => ApiResponse)
  @Authorized()
  async updateCharacter (@Arg('data') data:CharacterUpdateInputData, @Ctx() ctx:IContext):Promise<ApiResponse> {
    await this.characterService.update(ctx, data)
    return new ApiResponse('✅ character updated')
  }

  @Mutation(() => ApiResponse)
  @Authorized()
  async deleteCharacter (@Arg('id') id:number, @Ctx() ctx:IContext):Promise<ApiResponse> {
    await this.characterService.delete(ctx, id)
    return new ApiResponse('✅ character deleted')
  }

  @Mutation(() => ApiResponse)
  @Authorized()
  async addCharacterClass (@Arg('data') data:CharacterAddClassInputData, @Ctx() ctx:IContext):Promise<ApiResponse> {
    await this.characterService.addRunarcanaClass(ctx, data)
    return new ApiResponse('✅ character updated')
  }

  @Mutation(() => ApiResponse)
  @Authorized()
  async updateCharacterClass (@Arg('data') data:CharacterUpdateClassInputData, @Ctx() ctx:IContext):Promise<ApiResponse> {
    await this.characterService.updateRunarcanaClass(ctx, data)
    return new ApiResponse('✅ character updated')
  }

  @Mutation(() => ApiResponse)
  @Authorized()
  async levelUpCharacterClass (@Arg('data') data:CharacterRunarcanaClassId, @Ctx() ctx:IContext):Promise<ApiResponse> {
    await this.characterService.levelUpRunarcanaClass(ctx, data)
    return new ApiResponse('✅ character updated')
  }

  @Mutation(() => ApiResponse)
  @Authorized()
  async deleteCharacterClass (@Arg('data') data:CharacterRunarcanaClassId, @Ctx() ctx:IContext):Promise<ApiResponse> {
    await this.characterService.deleteRunarcanaClass(ctx, data)
    return new ApiResponse('✅ character updated')
  }
}
