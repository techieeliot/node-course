# My Notes from Andrew Mead's The Complete Node.js Developer Course (3rd Edition)

## Section 4

### Lesson 15

`process.argv` this is used to show the arguments passed into the command line, e.g. in `$ node index.js Eliot` the `process.argv[2]` would be Eliot.

you can save the `argv` argument vector into your program as a variable then run a conditional statement to output or run some function from that program.

you can set a flag with '--' and then we'll use a parser in the next video to separate the -- from the word.
