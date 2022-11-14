// Class definition 
function someClass() {
    // Properties go here 
    this.someProperty = 'some initial value';
}
// Member functions go here: 
someClass.prototype.someMemberFunction = function () {
    /* Do something using this */
    this.someProperty = 'modified value';
}

// Creation
var instance = new someClass();

// Usage 
console.log(instance.someProperty); // some initial value
instance.someMemberFunction();
console.log(instance.someProperty); // modified value
