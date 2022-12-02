import { AuthChecker } from 'type-graphql'
import AuthConfig from '../config/auth'
import { verify } from 'jsonwebtoken'
import { IContext } from '../interfaces/IContext'
import { IUser } from '../interfaces/IUser'

const Authentication: AuthChecker<IContext> = ({ context }): boolean => {

  const authHeader = context.token
  if (!authHeader) return false

  const [, token] = authHeader.split(' ')

  try {

    const decoded = verify(token, AuthConfig.jwt.secret) as IUser
    context.user = {
      id: decoded.id,
      username: decoded.username,
      nickname: decoded.nickname,
      createdAt: decoded.createdAt,
      updatedAt: decoded.updatedAt
    }
    return !!decoded
  
  } catch {

    return false
  
  }

}

export default Authentication
