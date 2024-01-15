const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const toDoSchema = new mongoose.Schema({
    title: { type: String, require: true },
    description: String,
    completed: { type: Boolean, require: true, default: false},
    created_at: { type: Date, default: Date.now}
})


const ToDo = mongoose.model('ToDo', toDoSchema)

module.exports = ToDo