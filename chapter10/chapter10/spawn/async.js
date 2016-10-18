var Q = require('q');

// an async function to load an item
var loadItem = Q.nbind(function (id, cb) {
    setTimeout(function () {
        cb(null, { id: id });
    }, 500); // simulate delay
});

// An async function to load items
var loadItems = Q.async(function* (ids){
    var items = [];
    for (var i = 0; i < ids.length; i++) {
        items.push(yield loadItem(ids[i]));
    }
    return items;
});

Q.spawn(function* (){
    console.log(yield loadItems([1,2,3]));
});