var x = 5; // too short; difficult to understand its purpose without context
/*eslint id-length: "error"*/     // default is minimum 2-chars ({ "min": 2 })
/*eslint-env es6*/

var x = 5;
obj.e = document.body;
var foo = function (e) { };
try {
    dangerousStuff();
} catch (e) {
    // ignore as many do
}
var myObj = { a: 1 };
(a) => { a * a };
class x { }
class Foo { x() {} }
function foo(...x) { }
var { x } = {};
var { x: a} = {};
var { a: [x]} = {};
({ prop: obj.x }) = {};
/*eslint id-length: "error"*/     // default is minimum 2-chars ({ "min": 2 })
/*eslint-env es6*/

var num = 5;
function _f() { return 42; }
function _func() { return 42; }
obj.el = document.body;
var foo = function (evt) { /* do stuff */ };
try {
    dangerousStuff();
} catch (error) {
    // ignore as many do
}
var myObj = { apple: 1 };
(num) => { num * num };
function foo(num = 0) { }
class MyClass { }
class Foo { method() {} }
function foo(...args) { }
var { prop } = {};
var { prop: a } = {};
var { prop: [x] } = {};
({ prop: obj.longName }) = {};
var data = { "x": 1 };  // excused because of quotes
data["y"] = 3;  // excused because of calculated property access
/*eslint id-length: ["error", 4]*/
/*eslint-env es6*/

var val = 5;
obj.e = document.body;
function (e) { };
try {
    dangerousStuff();
} catch (e) {
    // ignore as many do
}
var myObj = { a: 1 };
(val) => { val * val };
class x { }
class Foo { x() {} }
function foo(...x) { }
var { x } = {};
var { x: a} = {};
var { a: [x]} = {};
({ prop: obj.x }) = {};
/*eslint id-length: ["error", 4]*/
/*eslint-env es6*/

var value = 5;
function func() { return 42; }
obj.element = document.body;
var foo = function (event) { /* do stuff */ };
try {
    dangerousStuff();
} catch (error) {
    // ignore as many do
}
var myObj = { apple: 1 };
(value) => { value * value };
function foobar(value = 0) { }
class MyClass { }
class Foobar { method() {} }
function foobar(...args) { }
var { prop } = {};
var { prop: a } = {};
var { prop: [x] } = {};
({ prop: obj.name }) = {};
var data = { "x": 1 };  // excused because of quotes
data["y"] = 3;  // excused because of calculated property access
/*eslint id-length: ["error", { "min": 4 }]*/
/*eslint-env es6*/

var val = 5;
obj.e = document.body;
function (e) { };
try {
    dangerousStuff();
} catch (e) {
    // ignore as many do
}
var myObj = { a: 1 };
(val) => { val * val };
class x { }
class Foo { x() {} }
function foo(...x) { }
var { x } = {};
var { x: a} = {};
var { a: [x]} = {};
({ prop: obj.x }) = {};
/*eslint id-length: ["error", { "min": 4 }]*/
/*eslint-env es6*/

var value = 5;
function func() { return 42; }
obj.element = document.body;
var foo = function (event) { /* do stuff */ };
try {
    dangerousStuff();
} catch (error) {
    // ignore as many do
}
var myObj = { apple: 1 };
(value) => { value * value };
function foobar(value = 0) { }
class MyClass { }
class Foobar { method() {} }
function foobar(...args) { }
var { prop } = {};
var { prop: a } = {};
var { prop: [x] } = {};
({ prop: obj.name }) = {};
var data = { "x": 1 };  // excused because of quotes
data["y"] = 3;  // excused because of calculated property access
/*eslint id-length: ["error", { "max": "10" }]*/
/*eslint-env es6*/

var reallyLongVarName = 5;
function reallyLongFuncName() { return 42; }
obj.reallyLongPropName = document.body;
var foo = function (reallyLongArgName) { /* do stuff */ };
try {
    dangerousStuff();
} catch (reallyLongErrorName) {
    // ignore as many do
}
(reallyLongArgName) => { return !reallyLongArgName; };
/*eslint id-length: ["error", { "max": "10" }]*/
/*eslint-env es6*/

var varName = 5;
function funcName() { return 42; }
obj.propName = document.body;
var foo = function (arg) { /* do stuff */ };
try {
    dangerousStuff();
} catch (error) {
    // ignore as many do
}
(arg) => { return !arg; };
/*eslint id-length: ["error", { "properties": "never" }]*/
/*eslint-env es6*/

var myObj = { a: 1 };
({ a: obj.x.y.z }) = {};
({ prop: obj.i }) = {};
/*eslint id-length: ["error", { "max": "10" }]*/
/*eslint-env es6*/

var x = 5;
function x() { return 42; }
obj.x = document.body;
var foo = function (x) { /* do stuff */ };
try {
    dangerousStuff();
} catch (x) {
    // ignore as many do
}
(x) => { return x * x; };
