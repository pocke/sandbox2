function loadData (err, data) {
    doSomething(); // forgot to handle error
}
/*eslint handle-callback-err: "error"*/

function loadData (err, data) {
    doSomething();
}

/*eslint handle-callback-err: "error"*/

function loadData (err, data) {
    if (err) {
        console.log(err.stack);
    }
    doSomething();
}

function generateError (err) {
    if (err) {}
}
/*eslint handle-callback-err: ["error", "error"]*/

function loadData (error, data) {
    if (error) {
       console.log(error.stack);
    }
    doSomething();
}
