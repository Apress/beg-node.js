function List() {
    this.items = [];
}
List.prototype.count = function () {
    return this.items.length;
}
List.prototype.add = function (item) {
    if (!item.id) throw new Error('item must have id');
    this.items.push(item);
}
List.prototype.remove = function (id) {
    this.items = this.items.filter(function (item) { item.id !== id });
}
List.prototype.clear = function () {
    this.items = [];
}
List.prototype.getIds = function () {
    return this.items.map(function (item) {
        return item.id;
    });
}
List.prototype.get = function (id) {
    return this.items.filter(function (item) { return item.id == id })[0];
}

module.exports = List;