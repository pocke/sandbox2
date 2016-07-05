var foo;

console.log(foo === undefined);     // true
var foo = undefined;
/*eslint no-undef-init: "error"*/
/*eslint-env es6*/

var foo = undefined;
let bar = undefined;
/*eslint no-undef-init: "error"*/
/*eslint-env es6*/

var foo;
let bar;
const baz = undefined;
for (i = 0; i < 10; i++) {
    var x = undefined;
    console.log(x);
    x = i;
}
var x;

for (i = 0; i < 10; i++) {
    x = undefined;
    console.log(x);
    x = i;
}
for (i = 0; i < 10; i++) {
    var x;
    console.log(x);
    x = i;
}
var x;

for (i = 0; i < 10; i++) {
    console.log(x);
    x = i;
}
/*eslint no-undef-init: "error"*/

for (i = 0; i < 10; i++) {
    var x = undefined; // eslint-disable-line no-undef-init
    console.log(x);
    x = i;
}
