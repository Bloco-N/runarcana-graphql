import { hash, compare } from 'bcryptjs'
import SignInInputData from '../inputs/User/SignInInputData'
import SignUpInputData from '../inputs/User/SignUpInputData'
import { IContext } from '../interfaces/IContext'
import { Auth } from '../schemas/Auth'
import AuthConfig from '../config/auth'
import { sign } from 'jsonwebtoken'
import { User } from '../../prisma/generated/type-graphql'
export default class UserService {

  public async create(ctx: IContext, data: SignUpInputData): Promise<User> {

    const hashedPassword = await hash(data.password, 10)
    return await ctx.prisma.user.create({
      data: { ...data, password: hashedPassword }
    })
  
  }

  public async signIn(ctx: IContext, data: SignInInputData): Promise<Auth> {

    const { username, password } = data

    const user = await ctx.prisma.user.findUnique({ where: { username } })
    if (!user) throw Error('❌ User or Password incorrect')

    const userResponse = await ctx.prisma.user.findUnique({
      where: { id: user.id }
    })
    if (!userResponse) throw Error('❌ User not found')

    const passwordMatched = await compare(password, user.password)
    if (!passwordMatched) throw Error('❌ User or Password incorrect')

    const { secret, expiresIn } = AuthConfig.jwt
    const token = sign({
      id: user.id,
      username: user.username,
      nickname: user.nickname,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    }, secret, { expiresIn })

    return new Auth(token, userResponse)
  
  }

}
