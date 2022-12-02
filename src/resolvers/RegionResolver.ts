import { Args, Ctx, Query, Resolver } from 'type-graphql'
import { FindManyRegionArgs, Region } from '../../prisma/generated/type-graphql'
import { IContext } from '../interfaces/IContext'
import RegionService from '../services/RegionService'

@Resolver(Region)
export class RegionResolver {

  regionService = new RegionService()
  @Query(() => [Region])
  async listAllRegions(@Ctx() ctx: IContext, @Args() arg: FindManyRegionArgs): Promise<Region[]> {

    return await ctx.prisma.region.findMany(arg)
  
  }

}
