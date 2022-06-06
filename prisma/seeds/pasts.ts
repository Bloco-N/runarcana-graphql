import pasts from '../../dataSource/pasts.json'

export default pasts.map(past => {
  return {
    name: past
  }
})
