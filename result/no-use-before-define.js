/*eslint no-use-before-define: "error"*/
/*eslint-env es6*/

alert(a);
var a = 10;

f();
function f() {}

function g() {
    return b;
}
var b = 1;

// With blockBindings: true
{
    alert(c);
    let c = 1;
}
/*eslint no-use-before-define: "error"*/
/*eslint-env es6*/

var a;
a = 10;
alert(a);

function f() {}
f(1);

var b = 1;
function g() {
    return b;
}

// With blockBindings: true
{
    let C;
    c++;
}
/*eslint no-use-before-define: ["error", { "functions": false }]*/

f();
function f() {}
/*eslint no-use-before-define: ["error", { "classes": false }]*/
/*eslint-env es6*/

new A();
class A {
}
/*eslint no-use-before-define: ["error", { "classes": false }]*/
/*eslint-env es6*/

function foo() {
    return new A();
}

class A {
}
