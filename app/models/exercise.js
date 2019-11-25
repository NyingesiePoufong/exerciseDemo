var mongoose = require('mongoose')
var ObjectId = mongoose.Schema.Types.ObjectId

var ExerciseSchema  = mongoose.Schema({
  name: String,
  muscles: String,
  duration: String,
  instructions: String,
  userID: ObjectId
}, {'collection': 'exercises'})

module.exports = mongoose.model('Exercise', ExerciseSchema)
