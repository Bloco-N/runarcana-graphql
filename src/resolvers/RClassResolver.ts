import { Arg, Ctx, Query, Resolver } from 'type-graphql'
import { IContext } from '../interfaces/IContext'
import { RClassResponse } from '../schemas/RClassResponse'
import { RunarcanaClass } from '../schemas/relations/RunarcanaClass'
import RClassService from '../services/RClassService'

@Resolver(RunarcanaClass)
export class RClassResolver {
  rclassSevice = new RClassService()
  @Query(() => RClassResponse)
  async listAllRClasses (@Ctx() ctx:IContext, @Arg('search', { nullable: true }) search:string): Promise<RClassResponse> {
    const rclasses = await this.rclassSevice.listAll(ctx, search)
    return rclasses
  }

  @Query(() => RunarcanaClass)
  async getRClassById (@Ctx() ctx:IContext, @Arg('id') id:number) {
    const rClass = await this.rclassSevice.getRClassById(ctx, id)
    return rClass
  }
}
