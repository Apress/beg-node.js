var foo = {
    bar: 123,
    inspect: function () {
        return 'Bar is ' + this.bar;
    }
};

// Inspect
console.log(foo); // Logs: "Bar is 123"