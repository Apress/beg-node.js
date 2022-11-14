function longRunningOperation(callback) {
    // simulate a 3 second operation
    setTimeout(callback, 3000);
}

function userClicked() {
    console.log('starting a long operation');
    longRunningOperation(function () {
        console.log('ending a long operation');
    });
}
// simulate a user action
userClicked();
