import { IContext } from '../interfaces/IContext'
import { Origin } from '../schemas/Origin'
import { OriginResponse } from '../schemas/OriginResponse'

export default class OriginService {
  public async listAll (ctx: IContext, search: string): Promise<OriginResponse> {
    const originInclude = {
      Lineages: true
    }

    const origins = await ctx.prisma.origin.findMany({ include: originInclude })
    return {
      origins
    }
  }

  public async getOriginById (ctx:IContext, id:number): Promise<Origin> {
    const origin = await ctx.prisma.origin.findUnique({ where: { id } })
    return origin
  }
}
