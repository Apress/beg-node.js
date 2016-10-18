var assert = require('assert');

var List = require('./list');
var list = new List();

console.log('testing list.count');
assert.equal(list.count(), 0);

console.log('testing list.add');
list.add({
    id: 'someId',
    value: 'some value'
});
assert.equal(list.count(), 1);

console.log('testing list.clear');
list.clear();
assert.equal(list.count(), 0);

console.log('testing list.getIds');
list.add({
    id: 'someId',
    value: 'some value'
});
assert.equal(list.getIds()[0], 'someId');
list.clear();

console.log('testing list.remove');
list.add({
    id: 'someId',
    value: 'some value'
});
list.remove('someId');
assert.equal(list.count(), 0);

console.log('testing list.get');
list.add({
    id: 'someId',
    value: 'some value'
});
assert.equal(list.get('someId').value, 'some value');
list.clear();

console.log('testing list.add throws an error on invalid value');
assert.throws(function () {
    list.add({
        value: 'some value'
    })
},
function (err) {
    return (err instanceof Error)
    && (err.message == 'item must have id')
});