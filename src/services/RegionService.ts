import { IContext } from '../interfaces/IContext'
import { RegionResponse } from '../schemas/RegionResponse'

export default class RegionService {
  public async listAll (ctx: IContext, search: string): Promise<RegionResponse> {
    const regions = await ctx.prisma.region.findMany()
    return {
      regions
    }
  }
}
