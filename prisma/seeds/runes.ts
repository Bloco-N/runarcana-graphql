import runes from '../../dataSource/runes.json'

export default runes.map((rune) => ({
  name: rune.name,
  type: rune.type,
  prerequisites: rune.prerequisites,
  description: JSON.stringify(rune.info)
}))
