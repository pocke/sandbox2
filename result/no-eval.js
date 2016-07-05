var obj = { x: "foo" },
    key = "x",
    value = eval("obj." + key);
/*eslint no-eval: "error"*/

var obj = { x: "foo" },
    key = "x",
    value = eval("obj." + key);

(0, eval)("var a = 0");

var foo = eval;
foo("var a = 0");

// This `this` is the global object.
this.eval("var a = 0");
/*eslint no-eval: "error"*/
/*eslint-env browser*/

window.eval("var a = 0");
/*eslint no-eval: "error"*/
/*eslint-env node*/

global.eval("var a = 0");
/*eslint no-eval: "error"*/
/*eslint-env es6*/

var obj = { x: "foo" },
    key = "x",
    value = obj[key];

class A {
    foo() {
        // This is a user-defined method.
        this.eval("var a = 0");
    }

    eval() {
    }
}
{
    "no-eval": ["error", {"allowIndirect": true}] // default is false
}
/*eslint no-eval: "error"*/

var obj = { x: "foo" },
    key = "x",
    value = eval("obj." + key);
/*eslint no-eval: "error"*/

(0, eval)("var a = 0");

var foo = eval;
foo("var a = 0");

this.eval("var a = 0");
/*eslint no-eval: "error"*/
/*eslint-env browser*/

window.eval("var a = 0");
/*eslint no-eval: "error"*/
/*eslint-env node*/

global.eval("var a = 0");
module.exports = function(eval) {
    // If the value of this `eval` is built-in `eval` function, this is a
    // call of direct `eval`.
    eval("var a = 0");
};
var foo = window;
foo.eval("var a = 0");
