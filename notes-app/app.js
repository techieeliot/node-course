const chalk = require('chalk')
const getNotes = require('./notes')

const msg = getNotes()
console.log(msg)

console.log(chalk.inverse.bold.green.italic('Success!'))
console.log(chalk.inverse.blue.italic.dim('Hey hey hey') + chalk.magenta(' Selah!!!!'))
console.log(chalk.green('-------------'))

console.log(chalk.bold.red('Danger, Young Robinson!!!'))

const info = chalk.italic.blue;
const error = chalk.bold.red;
const warning = chalk.keyword('yellow');

console.log(chalk.green('-------------'))
console.log(info('Get better at node, man!'))
console.log(error('You really messed something up, dude'))
console.log(warning('You are pushing it buddy!'))
