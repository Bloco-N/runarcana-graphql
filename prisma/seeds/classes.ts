import rclasses from '../../dataSource/runarcanaClasses.json'

const classes = rclasses.map(rclass => {
  return {
    name: rclass
  }
})

export default classes
