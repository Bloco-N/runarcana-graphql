import { Arg, Authorized, Ctx, FieldResolver, Int, Mutation, Resolver, Root } from 'type-graphql'
import { Character, CharacterUpdateInput }                                    from '../../prisma/generated/type-graphql'
import CharacterCreateInputData                                               from '../inputs/Character/CharacterCreateInputData'
import CharacterLevelUpInputData                                              from '../inputs/Character/CharacterLevelUpInputData'
import { IContext }                                                           from '../interfaces/IContext'
import { ApiResponse }                                                        from '../schemas/ApiResponse'
import { Characteristic }                                                     from '../schemas/Character/CharacterComplements/Characteristic'
import { CharacterModsAndSkills }                                             from '../schemas/Character/CharacterComplements/CharacterModsAndSkills'
import CharacterService                                                       from '../services/CharacterService'

@Resolver(Character)
export class CharacterResolver {

  characterService = new CharacterService()

  @FieldResolver(() => CharacterModsAndSkills)
  @Authorized()
  async CharacterModsAndSkills(@Root() character: Character): Promise<CharacterModsAndSkills> {

    return await this.characterService.getCharacterModAndSkills(character)
  
  }

  @FieldResolver(() => [Characteristic])
  @Authorized()
  async Characteristics(@Root() character: Character, @Ctx() ctx: IContext): Promise<Characteristic[]> {

    return await this.characterService.getCharacteristics(ctx, character)
  
  }

  @FieldResolver(() => Int)
  @Authorized()
  async baseSpeed(@Root() character: Character, @Ctx() ctx: IContext): Promise<number> {

    return await this.characterService.getBaseSpeed(character, ctx)
  
  }

  @Mutation(() => ApiResponse)
  @Authorized()
  async createCharacter(@Arg('data') data: CharacterCreateInputData, @Ctx() ctx: IContext): Promise<ApiResponse> {

    const create = await this.characterService.create(ctx, data)

    if (!create) throw new Error('❌ failed to create character')
    return new ApiResponse('✅ character created')
  
  }

  @Mutation(() => ApiResponse)
  @Authorized()
  async updateCharacter(@Root() character: Character, @Arg('data') data: CharacterUpdateInput, @Ctx() ctx: IContext): Promise<ApiResponse> {

    const update = await this.characterService.update(character, data, ctx)

    if (!update) throw new Error('❌ failed to update character')
    return new ApiResponse('✅ character updated')
  
  }

  @Mutation(() => ApiResponse)
  @Authorized()
  async deleteCharacter(@Root() character: Character, @Ctx() ctx: IContext): Promise<ApiResponse> {

    const deleted = await this.characterService.delete(character, ctx)

    if (!deleted) throw new Error('❌ failed to delete character')
    return new ApiResponse('✅ character deleted')
  
  }

  @Mutation(() => ApiResponse)
  @Authorized()
  async levelUpCharacter(@Root() character: Character, @Arg('data') data: CharacterLevelUpInputData, @Ctx() ctx: IContext): Promise<ApiResponse> {

    const update = await this.characterService.levelUpCharacter(character, data, ctx)

    if (!update) throw new Error('❌ failed to update character')
    return new ApiResponse('✅ character updated')
  
  }

}
