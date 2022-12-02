import sutras from '../../dataSource/sutras.json'

export default sutras.map((sutra) => ({
  name: sutra.name,
  type: sutra.type,
  components: JSON.stringify(sutra.components),
  prerequisites: sutra.prerequisites,
  description: JSON.stringify(sutra.info)
}))
