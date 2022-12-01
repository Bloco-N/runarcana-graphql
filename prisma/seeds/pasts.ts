import pasts from '../../dataSource/pasts.json'

export default pasts.map((past) => {
  return {
    name: past.name,
    description: past.description,
    atributes: past.atributo,
    skills: past.skills,
    professions: past.profession,
    languages: past.language,
    equipments: past.Equipment,
    characteristic: past.characteristic
  }
})
