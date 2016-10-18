var moment = require('moment');

// From string to date 
console.log(moment("12-25-1995", "MM-DD-YYYY").toDate());
console.log(moment("2010-10-20 4:30", "YYYY-MM-DD HH:mm").toDate());
