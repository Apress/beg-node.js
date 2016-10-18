// Animal Base class
function Animal() {
}
Animal.prototype.walk = function () {
    console.log('walking');
};

// Bird Child class
function Bird() {
}
Bird.prototype = Object.create(Animal.prototype);

var bird = new Bird();
bird.walk();