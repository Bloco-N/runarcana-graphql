import { Arg, Ctx, Query, Resolver } from 'type-graphql'
import { IContext } from '../interfaces/IContext'
import PastService from '../services/PastService'
import { PastResponse } from '../schemas/Past/PastResponse'
import { Past } from '../../prisma/generated/type-graphql'

@Resolver(Past)
export class PastResolver {
  pastService = new PastService()
  @Query(() => PastResponse)
  async listAllPasts (@Ctx() ctx: IContext, @Arg('search', { nullable: true }) search: string): Promise<PastResponse> {
    const pasts = await this.pastService.listAll(ctx, search)
    return pasts
  }

  @Query(() => Past)
  async getPastById (@Ctx() ctx:IContext, @Arg('id') id:number) {
    const past = await this.pastService.getPastById(ctx, id)
    return past
  }
}
