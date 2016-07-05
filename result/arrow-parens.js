/*eslint-env es6*/

// Bad
a => {}

// Good
(a) => {}
/*eslint-env es6*/

// Bad
if (a => 2) {
}

// Good
if (a >= 2) {
}
/*eslint-env es6*/

// Bad
(a) => {}

// Good
a => {}
/*eslint arrow-parens: ["error", "always"]*/
/*eslint-env es6*/

a => {};
a => a;
a => {'\n'};
a.then(foo => {});
a.then(foo => a);
a(foo => { if (true) {}; });
/*eslint arrow-parens: ["error", "always"]*/
/*eslint-env es6*/

() => {};
(a) => {};
(a) => a;
(a) => {'\n'}
a.then((foo) => {});
a.then((foo) => { if (true) {}; });
/*eslint-env es6*/

var a = 1;
var b = 2;
// ...
if (a => b) {
 console.log('bigger');
} else {
 console.log('smaller');
};
// outputs 'bigger', not smaller as expected
/*eslint-env es6*/

var a = 1;
var b = 0;
// ...
if ((a) => b) {
 console.log('truthy value returned');
} else {
 console.log('falsey value returned');
};
// outputs 'truthy value returned'
/*eslint-env es6*/

var a = 1, b = 2, c = 3, d = 4;
var f = a => b ? c: d;
// f = ?
/*eslint-env es6*/

var a = 1, b = 2, c = 3, d = 4;
var f = (a) => b ? c: d;
/*eslint arrow-parens: ["error", "as-needed"]*/
/*eslint-env es6*/

(a) => {};
(a) => a;
(a) => {'\n'};
a.then((foo) => {});
a.then((foo) => a);
a((foo) => { if (true) {}; });
/*eslint arrow-parens: ["error", "as-needed"]*/
/*eslint-env es6*/

() => {};
a => {};
a => a;
a => {'\n'};
a.then(foo => {});
a.then(foo => { if (true) {}; });
(a, b, c) => a;
(a = 10) => a;
([a, b]) => a;
({a, b}) => a;
