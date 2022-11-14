var foo = {
    bar: 123,
    bas: [{
        qux: 1
    },
    {
        qux: 2
    },
    {
        qux: 3
    }]
};
console.log(foo.bar); // 123
console.log(foo.bas[0].qux); // 1
console.log(foo.bas[2].qux); // 2
