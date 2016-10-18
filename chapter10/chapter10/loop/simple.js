// an async function to load an item
function loadItem(id, cb) {
    setTimeout(function () {
        cb(null, { id: id });
    }, 500);
}

// functions to manage loading 
var loadedItems = [];
function itemsLoaded() {
    console.log('Do something with:', loadedItems);
}
function itemLoaded(err, item) {
    loadedItems.push(item);
    if (loadedItems.length == 2) {
        itemsLoaded();
    }
}

// calls to load
loadItem(1, itemLoaded);
loadItem(2, itemLoaded);