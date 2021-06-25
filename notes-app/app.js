const validator = require('validator')
const getNotes = require('./notes')

const msg = getNotes()

console.log(msg)

console.log(validator.isEmail('eliot587@gmail.com')) 
console.log(validator.isEmail('gmail.com')) 

console.log(validator.isURL('https://techieeliot.com')) 
console.log(validator.isURL('@techieeliot')) 