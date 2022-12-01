import origins from '../../dataSource/origins.json'

export default origins.map((origin) => {
  return {
    name: origin.name,
    inheritances: origin.Herança,
    languages: origin.idioma,
    characteristics: origin.característica,
    abilities: origin.habilidades,
    baseSpeed: origin.baseSpeed
  }
})
