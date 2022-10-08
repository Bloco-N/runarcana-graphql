import { IContext } from '../interfaces/IContext'
import { RClassResponse } from '../schemas/RClassResponse'

export default class RClassService {
  public async listAll (ctx: IContext, search: string): Promise<RClassResponse> {
    const runarcanaClasses = await ctx.prisma.runarcanaClass.findMany()
    return {
      runarcanaClasses
    }
  }
}
