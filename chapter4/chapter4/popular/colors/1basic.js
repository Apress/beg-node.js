// Loading this module modifies String for the entire process
require('colors');

console.log('hello'.green); // outputs green text
console.log('world!'.red); // outputs red text
console.log('Feeling yellow'.yellow); // outputs yellow text
console.log('But you look blue'.blue); // outputs yellow text
console.log('This should cheer you up!'.rainbow); // rainbow (ignores spaces)