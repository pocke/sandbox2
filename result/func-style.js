function doSomething() {
    // ...
}
var doSomething = function() {
    // ...
};
doSomething();

function doSomething() {
    // ...
}
doSomething();  // error!

var doSomething = function() {
    // ...
};
/*eslint func-style: ["error", "expression"]*/

function foo() {
    // ...
}
/*eslint func-style: ["error", "expression"]*/

var foo = function() {
    // ...
};
/*eslint func-style: ["error", "declaration"]*/

var foo = function() {
    // ...
};

var foo = () => {};
/*eslint func-style: ["error", "declaration"]*/

function foo() {
    // ...
}

// Methods (functions assigned to objects) are not checked by this rule
SomeObject.foo = function() {
    // ...
};
/*eslint func-style: ["error", "declaration", { "allowArrowFunctions": true }]*/

var foo = () => {};
