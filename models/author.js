var mongoose = require('mongoose')
var moment = require('moment')

var Schema = mongoose.Schema

var AuthorSchema = new Schema({
    first_name: {type: String, required: true, max: 100},
    family_name: {type: String, required: true, max: 100},
    date_of_birth: {type: Date},
    date_of_death: {type: Date}
})

AuthorSchema
    .virtual('name')
    .get(function() {
        return this.family_name + ', ' + this.first_name
    })

AuthorSchema
    .virtual('lifespan')
    .get(function() {
        return (this.date_of_death.getYear() - this.date_of_birth.getYear()).toString()
    })

AuthorSchema
    .virtual('url')
    .get(function() {
        return `/author/${this._id}`
    })

AuthorSchema
    .virtual('date_of_birth_formatted')
    .get(function() {
        return moment(this.date_of_birth).format('MMMM Do, YYYY')
    })

AuthorSchema
    .virtual('date_of_death_formatted')
    .get(function() {
        if (this.date_of_death) {
            return moment(this.date_of_death).format('MMMM Do, YYYY')
        } else {
            return 'living'
        }
    })

module.exports = mongoose.model('Author', AuthorSchema)
