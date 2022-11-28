import { Arg, Args, Authorized, Ctx, FieldResolver, Mutation, Resolver, Root } from 'type-graphql'
import CharacterCreateInputData from '../inputs/Character/CharacterCreateInputData'
import { IContext } from '../interfaces/IContext'
import { ApiResponse } from '../schemas/ApiResponse'
import CharacterService from '../services/CharacterService'
import CharacterLevelUpInputData from '../inputs/Character/CharacterLevelUpInputData'
import { CharacterModsAndSkills } from '../schemas/Character/CharacterComplements/CharacterModsAndSkills'
import { Characteristic } from '../schemas/Character/CharacterComplements/Characteristic'
import { Character, DeleteOneCharacterArgs, UpdateOneCharacterArgs } from '../../prisma/generated/type-graphql'

@Resolver(Character)
export class CharacterResolver {
  characterService = new CharacterService()

  @FieldResolver(() => CharacterModsAndSkills)
  @Authorized()
  async CharacterModsAndSkills (@Root() character: Character, @Ctx() ctx:IContext): Promise<CharacterModsAndSkills> {
    return await this.characterService.getCharacterModAndSkills(ctx, character)
  }

  @FieldResolver(() => [Characteristic])
  @Authorized()
  async Characteristics (@Root() character: Character, @Ctx() ctx:IContext): Promise<Characteristic[]> {
    return await this.characterService.getCharacteristics(ctx, character)
  }

  @Mutation(() => ApiResponse)
  @Authorized()
  async createCharacter (@Arg('data') data:CharacterCreateInputData, @Ctx() ctx:IContext):Promise<ApiResponse> {
    await this.characterService.create(ctx, data)
    return new ApiResponse('✅ character created')
  }

  @Mutation(() => ApiResponse)
  @Authorized()
  async updateCharacter (@Args() arg: UpdateOneCharacterArgs, @Ctx() ctx:IContext):Promise<ApiResponse> {
    const update = await ctx.prisma.character.update(arg)
    if (!update) throw new Error('❌ failed to update character')
    return new ApiResponse('✅ character updated')
  }

  @Mutation(() => ApiResponse)
  @Authorized()
  async deleteCharacter (@Args() arg: DeleteOneCharacterArgs, @Ctx() ctx:IContext):Promise<ApiResponse> {
    const deleted = await ctx.prisma.character.delete(arg)
    if (!deleted) throw new Error('❌ failed to delete character')
    return new ApiResponse('✅ character deleted')
  }

  @Mutation(() => ApiResponse)
  @Authorized()
  async levelUpCharacter (@Arg('data') data:CharacterLevelUpInputData, @Ctx() ctx:IContext):Promise<ApiResponse> {
    await this.characterService.levelUpCharacter(ctx, data)
    return new ApiResponse('✅ character updated')
  }
}
