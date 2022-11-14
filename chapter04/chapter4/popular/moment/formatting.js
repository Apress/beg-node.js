var moment = require('moment');

var date = new Date(2010, 1, 14, 15, 25, 50);
var wrapped = moment(date);

// "Sunday, February 14th 2010, 3:25:50 pm"
console.log(wrapped.format('"dddd, MMMM Do YYYY, h:mm:ss a"'));

// "Sun, 3PM"
console.log(wrapped.format("ddd, hA"));