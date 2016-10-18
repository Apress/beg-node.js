var foo = {
    bar: 123,
    bas: function () {
        console.log('inside this.bar is:', this.bar);
    }
}

console.log('foo.bar is: ', foo.bar); // foo.bar is: 123
foo.bas(); // inside this.bar is: 123

