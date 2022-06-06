import conjurations from '../../dataSource/conjurations.json'

export default conjurations.map(conjuration => {
  return {
    name: conjuration
  }
})
