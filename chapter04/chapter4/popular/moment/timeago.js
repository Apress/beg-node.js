var moment = require('moment');

var a = moment([2007, 0, 15]); // 15 Jan 2007
var b = moment([2007, 0, 16]); // 16 Jan 2007
var c = moment([2007, 1, 15]); // 15 Feb 2007
var d = moment([2008, 0, 15]); // 15 Jan 2008

console.log(a.from(b)); // "a day ago"
console.log(a.from(c)); // "a month ago"
console.log(a.from(d)); // "a year ago"

console.log(b.from(a)); // "in a day"
console.log(c.from(a)); // "in a month"
console.log(d.from(a)); // "in a year"

