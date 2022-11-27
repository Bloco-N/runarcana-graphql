import { RunarcanaClass } from '../../prisma/generated/type-graphql'
import { IContext } from '../interfaces/IContext'
import { RClassResponse } from '../schemas/RunaracanaClass/RunarcanaClassResponse'

export default class RClassService {
  public async listAll (ctx: IContext, search: string): Promise<RClassResponse> {
    const runarcanaClasses = await ctx.prisma.runarcanaClass.findMany()
    return {
      runarcanaClasses
    }
  }

  public async getRClassById (ctx:IContext, id:number): Promise<RunarcanaClass> {
    const rClass = await ctx.prisma.runarcanaClass.findUnique({ where: { id } })
    return rClass
  }
}
