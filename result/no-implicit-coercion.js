var b = !!foo;
var b = ~foo.indexOf(".");
var n = +foo;
var n = 1 * foo;
var s = "" + foo;
foo += "";
var b = Boolean(foo);
var b = foo.indexOf(".") !== -1;
var n = Number(foo);
var n = Number(foo);
var s = String(foo);
foo = String(foo);
/*eslint no-implicit-coercion: "error"*/

var b = !!foo;
var b = ~foo.indexOf(".");
// bitwise not is incorrect only with `indexOf`/`lastIndexOf` method calling.
/*eslint no-implicit-coercion: "error"*/

var b = Boolean(foo);
var b = foo.indexOf(".") !== -1;

var n = ~foo; // This is a just bitwise not.
/*eslint no-implicit-coercion: "error"*/

var n = +foo;
var n = 1 * foo;
/*eslint no-implicit-coercion: "error"*/

var n = Number(foo);
var n = parseFloat(foo);
var n = parseInt(foo, 10);
/*eslint no-implicit-coercion: "error"*/

var s = "" + foo;
foo += "";
/*eslint no-implicit-coercion: "error"*/

var s = String(foo);
/*eslint no-implicit-coercion: [2, { "allow": ["!!", "~"] } ]*/

var b = !!foo;
var b = ~foo.indexOf(".");
