import { Arg, Ctx, Query, Resolver } from 'type-graphql'
import { IContext } from '../interfaces/IContext'
import { Region } from '../schemas/Region'
import { RegionResponse } from '../schemas/RegionResponse'
import RegionService from '../services/RegionService'

@Resolver(Region)
export class RegionResolver {
  regionService = new RegionService()
  @Query(() => RegionResponse)
  async listAllRegions (@Ctx() ctx:IContext, @Arg('search', { nullable: true }) search:string): Promise<RegionResponse> {
    const regions = await this.regionService.listAll(ctx, search)
    return regions
  }

  @Query(() => Region)
  async getRegionById(@Ctx() ctx:IContext, @Arg('id') id:number){
    const region = await this.regionService.getRegionById(ctx, id);
    return region
  }
}
