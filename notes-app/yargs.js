// lessons 16-
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
	command: 'add', // command name
	describe: 'add a new note ', // optional
	// handler: function (argv) { // do something with this command
	// 	console.log('add a note', argv)
	// },
	builder: {
		title: {
			describe: 'note title', // will not display anything but it's optional
			demandOption: true, // this means that a title must be there
			// outputs: ... 
			// --title    note title                                               [required]
			// Missing required argument: title
			type: 'string'
		},
		body: {
			describe: 'note body',
			demandOption: true,
			type: 'string'

		}
	},
	handler: function (argv) {
		console.log('My Title:', argv.title)
		console.log('My Body:', argv.body)
		
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

// console.log(yargs.argv) // critical to run the commands, unless you use .par se()

yargs.parse()