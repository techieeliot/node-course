const yargs = require('yargs')

// console.log(process.argv) // not so helpful
// node yargs.js add --title="you added me" 
// outputs:
//[
// '/usr/local/bin/node',
// '/Users/c8908620/Desktop/projects/node-course/notes-app/yargs.js',
// 'add',
// '--title=you added me'
// ] again not so helpful

// very helpful
// console.log(yargs.argv) // for node yargs.js add --title="you added me" 
// outputs:
// { _: [ 'add' ], title: 'you added me', '$0': 'yargs.js' }

// by default added in
// node yargs.js --help
// node yargs.js --version

// Customize version numberQA
// yargs.version('1.1.0')

// for the notes you need to be able to add, remove, read, list

// Create add command
yargs.command({
	command: 'add',
	describe: 'add a new note ',
	handler: function () {
		console.log('add a note')
	}
})

yargs.command({
	command: 'remove',
	describe: 'remove a note',
	handler: function () {
		console.log('remove a note')
	}
})

// Create list command
yargs.command({
	command: 'list',
	describe: 'list the notes',
	handler: function () {
		console.log('list the notes')
	}
})

// Create read command
yargs.command({
	command: 'read',
	describe: 'read a note',
	handler: function () {
		console.log('read a note')
	}
})

console.log(yargs.argv)

