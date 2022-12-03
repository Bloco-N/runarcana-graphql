import { Args, Ctx, Query, Resolver } from 'type-graphql'
import { FindManyPastArgs, Past }     from '../../prisma/generated/type-graphql'
import { IContext }                   from '../interfaces/IContext'
import PastService                    from '../services/PastService'

@Resolver(Past)
export class PastResolver {

  pastService = new PastService()
  @Query(() => [Past])
  async listAllPasts(@Ctx() ctx: IContext, @Args() args: FindManyPastArgs): Promise<Past[]> {

    const pasts = await ctx.prisma.past.findMany(args)
    return pasts
  
  }

}
