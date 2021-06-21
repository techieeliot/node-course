const fs = require('fs')

// fs.writeFileSync('notes.txt', 'My name is Eliot!')

fs.appendFileSync('notes.txt', ' I am 33 years old.', ()=> {
	if (err) throw err
	console.log('good!')
})