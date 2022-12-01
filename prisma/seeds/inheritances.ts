import iheritances from '../../dataSource/inheritances.json'

export default iheritances.map((inheritance) => {
  return {
    name: inheritance.name,
    prerequisites: inheritance.prerequisites,
    description: inheritance.description,
    atributes: inheritance.atributes,
    benefits: inheritance.benefits,
    rechosen: inheritance.rechosen
  }
})
