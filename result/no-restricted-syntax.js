/* eslint no-restricted-syntax: ["error", "FunctionExpression", "WithStatement"] */

with (me) {
    dontMess();
}

var doSomething = function () {};
/* eslint no-restricted-syntax: ["error", "FunctionExpression", "WithStatement"] */

me.dontMess();

function doSomething() {};
