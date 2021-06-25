const chalk = require('chalk')
const getNotes = require('./notes')

const msg = getNotes()
console.log(msg)

console.log(chalk.inverse.bold.green('Success!'))
console.log(chalk.inverse.bgGreen('-------------'))

console.log(chalk.bold.red('Danger, Young Robinson!!!'))

const info = chalk.italic.blue;
const error = chalk.bold.red;
const warning = chalk.keyword('yellow');

console.log(info('Get better at node, man!'))
console.log(error('You really messed something up, dude'))
console.log(warning('You are pushing it buddy!'))
