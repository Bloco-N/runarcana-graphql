import { Args, Ctx, Query, Resolver } from 'type-graphql'
import { FindManyRunarcanaClassArgs, RunarcanaClass, RunarcanaClassRelationsResolver } from '../../prisma/generated/type-graphql'
import { IContext } from '../interfaces/IContext'
import RClassService from '../services/RClassService'

@Resolver(RunarcanaClass)
export class RunarcanaClassResolver extends RunarcanaClassRelationsResolver {
  rclassSevice = new RClassService()
  @Query(() => [RunarcanaClass])
  async listAllRuncarcanaClass (@Ctx() ctx:IContext, @Args() arg: FindManyRunarcanaClassArgs): Promise<RunarcanaClass[]> {
    return await ctx.prisma.runarcanaClass.findMany(arg)
  }
}
