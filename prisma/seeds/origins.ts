import origins from '../../dataSource/origins.json'

export default origins.map(origin => {
  return {
    name: origin.name
  }
})
