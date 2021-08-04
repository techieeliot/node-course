const command = process.argv[2]

console.log(process.argv)

if (command === 'add'){
	console.log('add a note')
} else if (command === 'remove'){
	console.log('remove note')
} else {
	console.log(`you input ${command}`)
}