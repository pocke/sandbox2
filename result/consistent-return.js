function doSomething(condition) {
    if (condition) {
        return true;
    } else {
        return;
    }
}
/*eslint consistent-return: "error"*/

function doSomething(condition) {
    if (condition) {
        return true;
    } else {
        return;
    }
}

function doSomething(condition) {
    if (condition) {
        return true;
    }
}
/*eslint consistent-return: "error"*/

function doSomething(condition) {
    if (condition) {
        return true;
    } else {
        return false;
    }
}

function Foo() {
    if (!(this instanceof Foo)) {
        return new Foo();
    }

    this.a = 0;
}
/*eslint consistent-return: ["error", { "treatUndefinedAsUnspecified": false }]*/

function foo(callback) {
    if (callback) {
        return void callback();
    }
    // no return statement
}

function bar(condition) {
    if (condition) {
        return undefined;
    }
    // no return statement
}
/*eslint consistent-return: ["error", { "treatUndefinedAsUnspecified": true }]*/

function foo(callback) {
    if (callback) {
        return void callback();
    }
    return true;
}

function bar(condition) {
    if (condition) {
        return undefined;
    }
    return true;
}
/*eslint consistent-return: ["error", { "treatUndefinedAsUnspecified": true }]*/

function foo(callback) {
    if (callback) {
        return void callback();
    }
    // no return statement
}

function bar(condition) {
    if (condition) {
        return undefined;
    }
    // no return statement
}
