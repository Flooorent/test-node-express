const mongoose = require('mongoose')

const mongoDB = 'mongodb://127.0.0.1/my_database'
mongoose.connect(mongoDB)
mongoose.Promise = global.Promise
const db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error'))

var Schema = mongoose.Schema

var SomeModelSchema = new Schema({
    name: String
})

var SomeModel = mongoose.model('SomeModel', SomeModelSchema)

var instance = new SomeModel({ name: 'jean'})

instance.save(function (err) {
    if (err) console.log('some error')
})

SomeModel.find({ 'name': 'coco'}, function (err, people) {
    if (err) console.log(err)
    else console.log(people)
})

SomeModel.count({}, function(err, count) {
    if (err) console.log(err)
    else console.log(count)
})