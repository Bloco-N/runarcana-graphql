import { Args, Ctx, Query, Resolver } from 'type-graphql'
import { FindManyOriginArgs, Origin } from '../../prisma/generated/type-graphql'
import { IContext }                   from '../interfaces/IContext'
import OriginService                  from '../services/OriginService'

@Resolver(Origin)
export class OriginResolver {

  originService = new OriginService()
  @Query(() => [Origin])
  async listAllOrigins(@Ctx() ctx: IContext, @Args() args: FindManyOriginArgs): Promise<Origin[]> {

    return await ctx.prisma.origin.findMany(args)
  
  }

}
