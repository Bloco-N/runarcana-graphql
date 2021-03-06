import { AuthChecker } from 'type-graphql'
import { Context } from '../context'
import AuthConfig from '../config/auth'
import { verify } from 'jsonwebtoken'

const Authentication:AuthChecker<Context> = ({ context }): boolean => {
  const authHeader = context.token
  if (!authHeader) return false

  const [, token] = authHeader.split(' ')

  try {
    const decoded = verify(token, AuthConfig.jwt.secret) as any
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
