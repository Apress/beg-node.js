var moment = require('moment');

// From date to moment
var wrapped = moment(new Date()); 
console.log(wrapped);

// From moment to date 
var date = wrapped.toDate();
console.log(date);