import conjurations from '../../dataSource/conjurations.json'
import durations    from '../../dataSource/durations.json'
import ranges       from '../../dataSource/ranges.json'
import spells       from '../../dataSource/spells.json'

export default spells.map((spell) => ({
  name: spell.name,
  level: spell.level,
  description: spell.description,
  materials: spell.materials,
  conjurationId: conjurations.indexOf(spell.conjuration) + 1,
  durationId: durations.indexOf(spell.duration) + 1,
  rangeId: ranges.indexOf(spell.range) + 1
}))
