function foo() {
    console.log('is this called from globals? : ', this === global); // true
}
foo();
