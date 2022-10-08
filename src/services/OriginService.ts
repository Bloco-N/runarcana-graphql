import { IContext } from '../interfaces/IContext'
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
}
