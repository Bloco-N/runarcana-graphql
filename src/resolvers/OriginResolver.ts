import { Arg, Ctx, Query, Resolver } from 'type-graphql'
import { IContext } from '../interfaces/IContext'
import { Origin } from '../schemas/Origin'
import { OriginResponse } from '../schemas/OriginResponse'
import OriginService from '../services/OriginService'

@Resolver(Origin)
export class OriginResolver {
  originService = new OriginService()
  @Query(() => OriginResponse)
  async listAllOrigins (@Ctx() ctx: IContext, @Arg('search', { nullable: true }) search: string) : Promise <OriginResponse> {
    const origins = await this.originService.listAll(ctx, search)
    return origins
  }

  @Query(() => Origin)
  async getOriginById(@Ctx() ctx:IContext, @Arg('id') id:number){
    const origin = await this.originService.getOriginById(ctx, id);
    return origin
  }
}
