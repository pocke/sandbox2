var x = new Function("a", "b", "return a + b");
/*eslint no-new-func: "error"*/

var x = new Function("a", "b", "return a + b");
var x = Function("a", "b", "return a + b");
/*eslint no-new-func: "error"*/

var x = function (a, b) {
    return a + b;
};
