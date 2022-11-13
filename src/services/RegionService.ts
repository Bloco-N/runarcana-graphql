import { IContext } from '../interfaces/IContext'
import { Region } from '../schemas/Region'
import { RegionResponse } from '../schemas/RegionResponse'

export default class RegionService {
  public async listAll (ctx: IContext, search: string): Promise<RegionResponse> {
    const regions = await ctx.prisma.region.findMany()
    return {
      regions
    }
  }

  public async getRegionById(ctx:IContext, id:number): Promise<Region>{
    const region = await ctx.prisma.region.findUnique({where:{ id }})
    return region
  }
}
