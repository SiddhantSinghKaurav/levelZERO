using readline-sync :: it a built-in module for collecting data from the user

input functions in js: but for these we have to create a interface first

var readline = require('readline');
var rl = readline.createInterface(
     process.stdin, process.stdout);
rl.question('What is your age? ', (age) => {
    console.log('Your age is: ' + age);
});     

readLine(prompt): Reads a string value from a user
readInt(prompt): Reads an integer value from a user
readFloat(prompt): Reads a float value from a user

#standard commit msg 

feat - a new feature
fix - a bug fix
docs - changes in documentation
style - everything related to styling
refactor - code changes that neither fixes a bug or adds a feature
test - everything related to testing
chore - updating build tasks, package manager configs, etc
