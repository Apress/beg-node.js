function foo() {
    console.trace('trace at foo');

    // Execution continues
    console.log('Stack trace printed');
}

function bar() {
    foo();
}

bar();